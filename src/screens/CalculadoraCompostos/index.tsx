import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [periods, setPeriods] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const navigation = useNavigation(); // Importando a função useNavigation para usar a navegação

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const n = parseInt(periods);
    const amount = p * Math.pow((1 + r), n);
    setResult(parseFloat(amount.toFixed(2))); // Convertendo para número novamente
  };

  return (
    <LinearGradient colors={['#808080', '#000']} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image source={require('../../../assets/flecha.png')} style={styles.imageflecha} />
      </TouchableOpacity>
      <View style={styles.containermeio}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Principal:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={principal}
            onChangeText={setPrincipal}
            placeholder="Digite o valor inicial"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Taxa de Juros (% ao ano):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={rate}
            onChangeText={setRate}
            placeholder="Digite a taxa de juros"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Períodos (em anos):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={periods}
            onChangeText={setPeriods}
            placeholder="Digite o número de períodos"
          />
        </View>
        <TouchableOpacity style={styles.calculateButton} onPress={calculateCompoundInterest}>
          <Text style={styles.calculateButtonText}>Calcular montante</Text>
        </TouchableOpacity>
        {result !== null && (
          <Text style={styles.result}>O montante final é: {result}</Text>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 0,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  containermeio: {
    backgroundColor: '#A9A9A9', // Cor de fundo cinza
    alignItems: 'center', // Centraliza na horizontal
    padding: 20, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    padding: 10,
    borderRadius: 5,
  },
  calculateButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  imageflecha: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
});

export default CompoundInterestCalculator;
