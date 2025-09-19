// components/PostCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostCard({ post, onLike }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.avatar}>{post.avatar}</Text>
        <View style={{flex:1}}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.meta}>{post.location} • {post.time}</Text>
        </View>
      </View>

      <View style={styles.image}>
        <Text style={styles.emoji}>{post.image}</Text>
        <View style={styles.live}><Text style={styles.liveText}>Live</Text></View>
      </View>

      <View style={styles.content}>
        <Text style={styles.caption}>{post.caption}</Text>
        <View style={styles.actions}>
          <View style={styles.left}>
            <TouchableOpacity style={styles.action} onPress={() => onLike(post.id)}>
              <Ionicons name="heart" size={20} color="#e53e3e" />
              <Text style={styles.actionText}>{post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Ionicons name="chatbubble-outline" size={20} color="#666" />
              <Text style={styles.actionText}>12</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.visit}>
            <Text style={styles.visitText}>Visit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{backgroundColor:'#fff',borderRadius:12,marginBottom:16,overflow:'hidden'},
  header:{flexDirection:'row',alignItems:'center',padding:12},
  avatar:{fontSize:32,marginRight:10},
  username:{fontWeight:'700',color:'#333'},
  meta:{fontSize:12,color:'#666',marginTop:4},
  image:{height:200,alignItems:'center',justifyContent:'center',backgroundColor:'#fef5e7'},
  emoji:{fontSize:56},
  live:{position:'absolute',top:8,right:8,backgroundColor:'rgba(0,0,0,0.6)',paddingHorizontal:8,paddingVertical:4,borderRadius:12},
  liveText:{color:'#fff',fontSize:10},
  content:{padding:12},
  caption:{color:'#333',marginBottom:10},
  actions:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  left:{flexDirection:'row'},
  action:{flexDirection:'row',alignItems:'center',marginRight:16},
  actionText:{marginLeft:6,color:'#666'},
  visit:{backgroundColor:'#e53e3e',paddingHorizontal:14,paddingVertical:6,borderRadius:16},
  visitText:{color:'#fff',fontWeight:'700',fontSize:12}
});
