import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';

const App: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['white', 'black']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>
              Bem vindo ao nível 1, aqui você irá aprender tudo sobre finanças e o melhor jeito de gestir o seu
                            <Text style={styles.topBardinheiro}> dinheiro</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={handleBackButton} style={styles.touchable}>
            <Image source={require('../../../assets/flecha.png')} style={styles.imageflecha} />
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('nivel1pagina1')}
          >
            <Text style={styles.buttonText}>Vamos aprender!!</Text>
          </TouchableOpacity>
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
    paddingTop: 80, // Espaço para afastar do topo
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
    textAlign: 'center',
    lineHeight: 30,
  },
  topBardinheiro: {
    color: 'lightgreen',
    fontSize: 20,
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
  touchable: {
    position: 'absolute',
    top: 25, // Ajuste conforme necessário
    left: -15, // Ajuste conforme necessário
  },
  imageflecha: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
});

export default App;
