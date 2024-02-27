import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';

const App: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <LinearGradient
      colors={['white', 'black']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>Em processo de criação, aguarde que mais diversão vira logo</Text>
          </View>
        </View>
        <View style={styles.middleContainer}>

          {/* Mais botões conforme necessário */}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50, // Espaço para afastar do topo
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    height: 200,
    width: 350,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 50,
  },
  topBarText: {
    fontSize: 20,
    color: 'white',
    textAlign: "center",
    lineHeight: 30,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    height: 50,
    width: 200,
    marginBottom: 300,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default App;
