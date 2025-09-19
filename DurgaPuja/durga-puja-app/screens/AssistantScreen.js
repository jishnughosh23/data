// screens/AssistantScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const suggestions = [
  { icon:'🏛️', title:'Best Pandals', subtitle:'Trending this year' },
  { icon:'🍽️', title:'Food Courts', subtitle:'Near pandals' },
  { icon:'🎪', title:'Cultural Events', subtitle:"Tonight's programs" },
  { icon:'🚇', title:'Transport', subtitle:'Metro & bus routes' }
];

export default function AssistantScreen(){
  const [messages, setMessages] = useState([{ id:'1', text:"Namaskar! I'm your Puja AI assistant. How can I help?", sender:'bot', time:'10:30'}]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { id:Date.now().toString(), text:input, sender:'user', time:'now' };
    setMessages(prev=>[...prev,userMsg]);
    setInput('');
    setTimeout(()=> {
      const bot = { id:Date.now().toString()+'b', text: `I can help with: pandals, food, events. You typed: ${input}`, sender:'bot', time:'now' };
      setMessages(prev=>[...prev,bot]);
    },700);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}><Text style={styles.title}>Puja AI Assistant</Text></View>

      <View style={styles.suggestions}>
        {suggestions.map((s,i)=>(
          <TouchableOpacity key={i} style={styles.sugg} onPress={()=>setInput(s.title)}>
            <Text style={{fontSize:22}}>{s.icon}</Text>
            <View style={{marginLeft:8}}>
              <Text style={{fontWeight:'700'}}>{s.title}</Text>
              <Text style={{fontSize:12,color:'#666'}}>{s.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={messages}
        renderItem={({item})=>(
          <View style={[styles.msgRow, item.sender==='user' ? styles.userRow : styles.botRow]}>
            <View style={[styles.msgBubble, item.sender==='user' ? styles.userBubble : styles.botBubble]}>
              <Text style={ item.sender==='user' ? {color:'#fff'} : {color:'#333'} }>{item.text}</Text>
            </View>
          </View>
        )}
        keyExtractor={i=>i.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        style={{flex:1}}
      />

      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Ask about pandals, food, events..." value={input} onChangeText={setInput} onSubmitEditing={send} />
        <TouchableOpacity style={styles.send} onPress={send}><Text style={{color:'#fff'}}>Send</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:'#fff'},
  header:{backgroundColor:'#2563eb',padding:16},
  title:{color:'#fff',fontSize:18,fontWeight:'800'},
  suggestions:{flexDirection:'row',flexWrap:'wrap',padding:12,justifyContent:'space-between'},
  sugg:{width:'48%',backgroundColor:'#fff',padding:12,borderRadius:12,marginBottom:12,flexDirection:'row',alignItems:'center'},
  msgRow:{marginBottom:10},
  userRow:{alignItems:'flex-end'},
  botRow:{alignItems:'flex-start'},
  msgBubble:{maxWidth:'80%',padding:10,borderRadius:12},
  userBubble:{backgroundColor:'#2563eb'},
  botBubble:{backgroundColor:'#f7fafc'},
  inputRow:{flexDirection:'row',padding:12,borderTopWidth:1,borderTopColor:'#eee',backgroundColor:'#fff',alignItems:'center'},
  input:{flex:1,borderWidth:1,borderColor:'#eee,padding:10',paddingHorizontal:12,borderRadius:20,marginRight:8},
  send:{backgroundColor:'#2563eb',paddingHorizontal:14,paddingVertical:10,borderRadius:20}
});
