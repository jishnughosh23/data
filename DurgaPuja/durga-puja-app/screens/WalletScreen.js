// screens/WalletScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RewardCard from '../components/RewardCard';

const rewards = {
  balance: 2450,
  vouchers: [
    { id: '1', title: 'Bhojohori Manna', discount: '25% OFF', validity: 'Valid till Oct 15' },
    { id: '2', title: 'Saree Discount', discount: '₹500 OFF', validity: 'Valid till Oct 20' },
    { id: '3', title: 'Metro Card', discount: 'Free Rides', validity: 'Valid for 5 rides' }
  ]
};

export default function WalletScreen(){
  return (
    <View style={styles.screen}>
      <View style={styles.header}><Text style={styles.title}>Puja Wallet</Text></View>

      <View style={styles.balance}>
        <Text style={styles.label}>Points Balance</Text>
        <Text style={styles.amount}>{rewards.balance}</Text>
      </View>

      <FlatList
        data={rewards.vouchers}
        renderItem={({item}) => <RewardCard item={item} />}
        keyExtractor={i=>i.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:'#fff'},
  header:{backgroundColor:'#38a169',padding:16},
  title:{color:'#fff',fontSize:20,fontWeight:'800'},
  balance:{backgroundColor:'#d69e2e',padding:16,margin:16,borderRadius:12},
  label:{color:'rgba(255,255,255,0.9)'},
  amount:{color:'#fff',fontSize:28,fontWeight:'900',marginTop:6}
});
