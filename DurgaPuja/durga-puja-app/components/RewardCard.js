// components/RewardCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RewardCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.discount}>{item.discount}</Text>
        </View>
        <Ionicons name="gift-outline" size={22} color="#fff" />
      </View>
      <Text style={styles.valid}>{item.validity}</Text>
      <TouchableOpacity style={styles.use}><Text style={styles.useText}>Use Now</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{backgroundColor:'#d69e2e',borderRadius:12,padding:14,marginBottom:12},
  header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  title:{color:'#fff',fontWeight:'700'},
  discount:{color:'#fff',fontSize:18,fontWeight:'800',marginTop:6},
  valid:{color:'rgba(255,255,255,0.9)',marginTop:10},
  use:{backgroundColor:'#fff',paddingHorizontal:12,paddingVertical:8,borderRadius:8,marginTop:12,alignSelf:'flex-start'},
  useText:{color:'#d69e2e',fontWeight:'700'}
});
