from typing import Annotated, Literal
from typing_extensions import TypedDict
from langgraph.graph import END, START
from langgraph.graph.state import StateGraph
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode
from langchain_core.tools import tool
from langchain_core.messages import BaseMessage, AIMessage, SystemMessage
import os
from dotenv import load_dotenv

load_dotenv()

os.environ["GROQ_API_KEY"]=os.getenv("GROQ_API_KEY")
os.environ["LANGSMITH_API_KEY"]=os.getenv("LANGCHAIN_API_KEY")
os.environ["LANGSMITH_TRACING"]="true"
os.environ["LANGSMITH_PROJECT"]="TestProject"

from langchain.chat_models import init_chat_model
llm=init_chat_model("groq:llama3-8b-8192")

class State(TypedDict):
    messages: Annotated[list[BaseMessage], add_messages]

def make_tool_graph():
    # Define tools
    @tool
    def add(a: float, b: float):
        """Add two numbers together"""
        return a + b

    @tool
    def multiply(a: float, b: float):
        """Multiply two numbers together"""
        return a * b

    tools = [add, multiply]
    tool_node = ToolNode(tools)
    llm_with_tools = llm.bind_tools(tools)

    def call_llm_model(state: State):
        """Call LLM with tools and system prompt"""
        messages = state['messages']
        
        # Add system message to guide tool usage
        system_prompt = SystemMessage(content="""You are a helpful assistant with access to mathematical tools.

Available tools:
- add(a, b): Add two numbers
- multiply(a, b): Multiply two numbers

IMPORTANT INSTRUCTIONS:
1. Only use the tools listed above when you need to perform mathematical calculations
2. For general questions, explanations, or non-mathematical queries, respond directly without using any tools
3. Do not attempt to call any tools that are not in your available tool list
4. If a user asks about concepts, definitions, or general knowledge, answer directly

Examples:
- "What is 5 + 3?" → Use the add tool
- "What is machine learning?" → Answer directly without tools
- "Calculate 4 * 6" → Use the multiply tool""")
        
        # Combine system message with user messages
        all_messages = [system_prompt] + messages
        
        try:
            response = llm_with_tools.invoke(all_messages)
            return {"messages": [response]}
        except Exception as e:
            # If tool calling fails, fall back to regular LLM
            response = llm.invoke(messages)
            return {"messages": [response]}

    def should_continue(state: State) -> Literal["tools", "__end__"]:
        """Determine whether to continue to tools or end"""
        last_message = state['messages'][-1]
        
        # Check if it's an AI message with valid tool calls
        if isinstance(last_message, AIMessage) and last_message.tool_calls:
            # Verify that all tool calls are for available tools
            available_tool_names = {tool.name for tool in tools}
            for tool_call in last_message.tool_calls:
                if tool_call['name'] not in available_tool_names:
                    return "__end__"  # Invalid tool call, end the conversation
            return "tools"
        else:
            return "__end__"

    # Build the graph
    builder = StateGraph(State)
    builder.add_node("agent", call_llm_model)
    builder.add_node("tools", tool_node)

    # Add edges
    builder.add_edge(START, "agent")
    builder.add_conditional_edges(
        "agent",
        should_continue,
        {
            "tools": "tools",
            "__end__": END
        }
    )
    builder.add_edge("tools", "agent")

    # Compile the graph
    graph = builder.compile()
    return graph

def test_tool_graph():
    """Test the tool graph with various inputs"""
    tool_agent = make_tool_graph()
    
    test_cases = [
        "What is 5 + 3?",
        "What is machine learning?",
        "Calculate 4 * 6",
        "Tell me about artificial intelligence",
        "What is 10 + 20?"
    ]
    
    for i, test_case in enumerate(test_cases, 1):
        print(f"\nTest {i}: {test_case}")
        try:
            response = tool_agent.invoke({"messages": [test_case]})
            print(f"Success: {response['messages'][-1].content}")
        except Exception as e:
            print(f"Error: {str(e)}")

# Create the tool agent
tool_agent = make_tool_graph()

# Test it
if __name__ == "__main__":
    test_tool_graph()