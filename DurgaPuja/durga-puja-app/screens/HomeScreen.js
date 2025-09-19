// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';

const initialPosts = [
  { id:'1', username:'riya_kolkata', avatar:'👩', image:'🏛️', caption:'Magnificent Durga Ma at Park Circus!', likes:234, location:'Park Circus, Kolkata', time:'2h ago' },
  { id:'2', username:'arjun_bengali', avatar:'👨', image:'🎭', caption:'Dhunuchi dance at community pandal.', likes:156, location:'Salt Lake, Kolkata', time:'4h ago' },
  { id:'3', username:'priya_puja', avatar:'👩‍🦱', image:'🏮', caption:'Evening aarti vibes!', likes:389, location:'Kumartuli, Kolkata', time:'6h ago' }
];

export default function HomeScreen() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id) => {
    setPosts(prev => prev.map(p => p.id === id ? {...p, likes: p.likes + 1} : p));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Durga Puja 2025</Text>
          <Text style={styles.sub}>Subho Mahalaya ✨</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard post={item} onLike={handleLike} />}
        keyExtractor={i => i.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:'#f5f5f5'},
  header:{backgroundColor:'#e53e3e',padding:16},
  title:{color:'#fff',fontSize:22,fontWeight:'800'},
  sub:{color:'rgba(255,255,255,0.95)',marginTop:4}
});
