from langchain_mcp_adapters.client import MultiServerMCPClient

from langgraph.prebuilt import create_react_agent
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()
import asyncio


async def main():
    client = MultiServerMCPClient(
        {
            "math":{
                "command":"python",
                "args":["mathserver.py"],
                "transport":"stdio"
            },
            "weather":{
                "url":"http://localhost:8000/mcp",
                # "command":"python weather.py",
                # "args":["weather.py"],
                "transport":"streamable_http"
            }
            
        }
    )

    import os
    os.environ["GROQ_API_KEY"] = os.getenv("GROQ_API_KEY")

    tools = await client.get_tools()
    # print("Tools:", tools)
    
    # Use a supported production model instead of the decommissioned qwen-qwq-32b
    model = ChatGroq(model="llama-3.3-70b-versatile")  # Production model
    # Alternative options:
    # model = ChatGroq(model="llama-3.1-8b-instant")  # Faster, smaller model
    # model = ChatGroq(model="llama3-70b-8192")        # Another 70B option
    # model = ChatGroq(model="gemma2-9b-it")           # Google's Gemma model
    
    agent = create_react_agent(model, tools)

    math_response = await agent.ainvoke(
        {"messages":[{"role":"user","content":"What is weather in Tokyo?"}]}
    )

    # LangGraph returns a dictionary with 'messages' key containing the response
    print("Math_response: ", math_response['messages'][-1].content)


asyncio.run(main())