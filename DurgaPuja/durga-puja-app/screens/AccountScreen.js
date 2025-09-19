// screens/AccountScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const profile = {
  name: 'Anushka Roy', username:'@anushka_puja', avatar:'👩‍💼',
  followers:1247, following:856, posts:89,
  photos:['🏛️','🎭','🏮','🪔','🌺','🎪','🥘','👗','💃']
};

export default function AccountScreen(){
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 140 }} style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Profile</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.avatar}>{profile.avatar}</Text>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.username}>{profile.username}</Text>

        <View style={styles.stats}>
          <View style={styles.stat}><Text style={styles.statNum}>{profile.posts}</Text><Text>Posts</Text></View>
          <View style={styles.stat}><Text style={styles.statNum}>{profile.followers}</Text><Text>Followers</Text></View>
          <View style={styles.stat}><Text style={styles.statNum}>{profile.following}</Text><Text>Following</Text></View>
        </View>
      </View>

      <View style={styles.photos}>
        {profile.photos.map((p,i)=>(
          <View key={i} style={styles.photoItem}><Text style={{fontSize:22}}>{p}</Text></View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:'#f7fafc'},
  header:{backgroundColor:'#553c9a',padding:16,marginBottom:12},
  title:{color:'#fff',fontSize:20,fontWeight:'800'},
  profileCard:{backgroundColor:'#fff',borderRadius:12,padding:16,alignItems:'center',marginBottom:12},
  avatar:{fontSize:48},
  name:{fontWeight:'800',fontSize:18,marginTop:8},
  username:{color:'#666',marginTop:4},
  stats:{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:12},
  stat:{alignItems:'center'},
  statNum:{fontWeight:'800',fontSize:16},
  photos:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'},
  photoItem:{width:'31%',aspectRatio:1,backgroundColor:'#fff',borderRadius:8,alignItems:'center',justifyContent:'center',marginBottom:8}
});
