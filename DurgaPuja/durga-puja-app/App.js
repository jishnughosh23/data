import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import FriendsScreen from './screens/FriendsScreen';
import WalletScreen from './screens/WalletScreen';
import AccountScreen from './screens/AccountScreen';
import AssistantScreen from './screens/AssistantScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen />;
      case 'friends': return <FriendsScreen />;
      case 'wallet': return <WalletScreen />;
      case 'account': return <AccountScreen />;
      case 'assistant': return <AssistantScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderScreen()}
      </View>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1 },
});