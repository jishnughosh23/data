// components/NotificationItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NotificationItem({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>{item.avatar}</Text>
      <View style={styles.text}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <View style={styles.action}>
        {item.type === 'group' && <TouchableOpacity style={styles.join}><Text style={styles.joinText}>Join</Text></TouchableOpacity>}
        {item.type === 'follow' && <TouchableOpacity style={styles.follow}><Text style={styles.followText}>Follow</Text></TouchableOpacity>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',padding:12,borderRadius:12,marginBottom:12},
  avatar:{fontSize:28},
  text:{flex:1,marginLeft:12},
  name:{fontWeight:'700',color:'#333'},
  status:{color:'#666',fontSize:12,marginTop:2},
  time:{fontSize:10,color:'#999',marginTop:4},
  action:{marginLeft:8},
  join:{backgroundColor:'#e53e3e',paddingHorizontal:10,paddingVertical:6,borderRadius:10},
  joinText:{color:'#fff',fontWeight:'700'},
  follow:{borderWidth:1,borderColor:'#e53e3e',paddingHorizontal:10,paddingVertical:6,borderRadius:10},
  followText:{color:'#e53e3e',fontWeight:'700'}
});
