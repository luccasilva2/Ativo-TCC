import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Config() {
  return (
    <LinearGradient
      colors={['#000', '#fff']}
      style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Configurações</Text>
      </View>
      <Text>Config</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    backgroundColor: '#000',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  topBarText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
