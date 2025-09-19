// components/BottomNav.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabButton = ({ icon, label, tabKey, active, onPress }) => (
  <TouchableOpacity style={[styles.tabButton, active && styles.tabActive]} onPress={() => onPress(tabKey)}>
    <Ionicons name={icon} size={22} color={active ? '#fff' : '#666'} />
    <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
  </TouchableOpacity>
);

export default function BottomNav({ activeTab, setActiveTab }) {
  return (
    <View style={styles.container}>
      <TabButton icon="home" label="Home" tabKey="home" active={activeTab==='home'} onPress={setActiveTab} />
      <TabButton icon="people" label="Friends" tabKey="friends" active={activeTab==='friends'} onPress={setActiveTab} />
      <TabButton icon="wallet" label="Wallet" tabKey="wallet" active={activeTab==='wallet'} onPress={setActiveTab} />
      <TabButton icon="person" label="Account" tabKey="account" active={activeTab==='account'} onPress={setActiveTab} />
      <TabButton icon="chatbubbles" label="AI" tabKey="assistant" active={activeTab==='assistant'} onPress={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: Platform.OS === 'ios' ? 24 : 12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: '#e53e3e',
  },
  tabLabel: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  tabLabelActive: {
    color: '#fff',
  },
});
