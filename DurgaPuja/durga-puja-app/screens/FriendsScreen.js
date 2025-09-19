// screens/FriendsScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NotificationItem from '../components/NotificationItem';

const friends = [
  { id:'1', name:'Ananya Das', avatar:'👩', status:'Added you to "Pandal Hopping 2025"', time:'1h ago', type:'group' },
  { id:'2', name:'Rahul Ghosh', avatar:'👨', status:'Liked your pandal photo', time:'3h ago', type:'like' },
  { id:'3', name:'Shreya Sen', avatar:'👩‍🦰', status:'Started following you', time:'5h ago', type:'follow' },
  { id:'4', name:'Durga Puja Committee', avatar:'🏛️', status:'Invited you to special event', time:'1d ago', type:'event' }
];

export default function FriendsScreen(){
  return (
    <View style={styles.screen}>
      <View style={styles.header}><Text style={styles.title}>Friends & Activity</Text></View>

      <FlatList
        data={friends}
        renderItem={({item}) => <NotificationItem item={item} />}
        keyExtractor={i=>i.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:'#f7fafc'},
  header:{backgroundColor:'#9f7aea',padding:16},
  title:{color:'#fff',fontSize:20,fontWeight:'800'}
});
