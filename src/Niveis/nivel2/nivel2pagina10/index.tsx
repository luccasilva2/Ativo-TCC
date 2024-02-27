import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../routes/types';
 

const App: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleButtonClick = (isCorrect: boolean) => {
    if (isCorrect) {
      Alert.alert('Resposta Correta!');
      // Navegar para a próxima página quando a resposta estiver correta
      setTimeout(() => {
        setLevel(level);
        navigation.navigate('parabens2');
      }, 1000);
    } else {
      Alert.alert('Resposta Incorreta. Tente novamente.');
    }
    // Atualiza o estado para indicar que a pergunta foi respondida
    setIsAnswered(true);
  };

  const handleBackButton = () => {
    // Adicione a lógica para voltar à página anterior
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['white', 'black']}
      style={styles.linearGradient}
    >

          <TouchableOpacity onPress={handleBackButton} style={styles.touchable}>
            <Image source={require('../../../../assets/flecha.png')} style={styles.imageflecha} />
          </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>

            Qual é a vantagem de investir em um fundo mútuo?

</Text>
          </View>
        </View>
        <View style={styles.middleContainer}>
           {/* Adicione seus botões aqui */}
           <TouchableOpacity
            style={[
              styles.button,
              isAnswered && { backgroundColor: 'green' }, // Altera para verde se a pergunta foi respondida corretamente
            ]}
            onPress={() => handleButtonClick(true)}
          >
            <Text style={styles.buttonText}>

            a) Diversificação


</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              isAnswered && { backgroundColor: 'red' }, // Altera para vermelho se a pergunta foi respondida incorretamente
            ]}
            onPress={() => handleButtonClick(false)}
          >
            <Text style={styles.buttonText}>

            b) Controle direto sobre os investimentos

</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              isAnswered && { backgroundColor: 'red' }, // Altera para vermelho se a pergunta foi respondida incorretamente
            ]}
            onPress={() => handleButtonClick(false)}
          >
            <Text style={styles.buttonText}>

            c) Maior risco

</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              isAnswered && { backgroundColor: 'red' }, // Altera para vermelho se a pergunta foi respondida incorretamente
            ]}
            onPress={() => handleButtonClick(false)}
          >
            <Text style={styles.buttonText}>

            d) Maior retorno garantido



              </Text>

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
    paddingTop: 90, // Espaço para afastar do topo
    position: 'relative', // Permite posicionar a flecha em relação ao container pai
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  topBar: {
    height: 150,
    width: 350,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  topBarText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
    height: 70,
    width: 350,
    marginTop: 30,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 0,
  },
  touchable: {
    position: 'absolute',
    top: 25, // Ajuste conforme necessário
    left: 0, // Ajuste conforme necessário
  },
  imageflecha: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
});

export default App;