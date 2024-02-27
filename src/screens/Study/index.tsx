import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackNavigationProp } from '../../routes/types';

export default function CombinedScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <LinearGradient
      colors={['#808080', '#000']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Estudar</Text>
        </View>

        {/* Botões */}
                    <View style={styles.containerlevel1}>
              <TouchableOpacity
                style={styles.middleButton1}
                onPress={() => navigation.navigate('jogolevel1')}
              >
                <Text style={styles.buttonNumber}>1</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel2}>
              <TouchableOpacity
                style={styles.middleButton2}
                onPress={() => navigation.navigate('jogolevel2')}
              >
                <Text style={styles.buttonNumber}>2</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel3}>
              <TouchableOpacity
                style={styles.middleButton3}
                onPress={() => navigation.navigate('jogolevel3')}
              >
                <Text style={styles.buttonNumber}>3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel4}>
              <TouchableOpacity
                style={styles.middleButton4}
                onPress={() => navigation.navigate('jogolevel4')}
              >
                <Text style={styles.buttonNumber}>4</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel5}>
              <TouchableOpacity
                style={styles.middleButton5}
                onPress={() => navigation.navigate('jogolevel5')}
              >
                <Text style={styles.buttonNumber}>5</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel6}>
              <TouchableOpacity
                style={styles.middleButton6}
                onPress={() => navigation.navigate('jogolevel6')}
              >
                <Text style={styles.buttonNumber}>6</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel7}>
              <TouchableOpacity
                style={styles.middleButton7}
                onPress={() => navigation.navigate('jogolevel7')}
              >
                <Text style={styles.buttonNumber}>7</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel8}>
              <TouchableOpacity
                style={styles.middleButton8}
                onPress={() => navigation.navigate('jogolevel8')}
              >
                <Text style={styles.buttonNumber}>8</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel9}>
              <TouchableOpacity
                style={styles.middleButton9}
                onPress={() => navigation.navigate('jogolevel9')}
              >
                <Text style={styles.buttonNumber}>9</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerlevel10}>
              <TouchableOpacity
                style={styles.middleButton10}
                onPress={() => navigation.navigate('jogolevel10')}
              >
                <Text style={styles.buttonNumber10}>10</Text>
              </TouchableOpacity>
            </View>
          {/* Adicione mais botões conforme necessário */}

        {/* Logo */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logoImage}
          />
        </View>

        {/* Nova Imagem */}
        <View style={styles.newImageContainer}>
          <Image
            source={require('../../../assets/jogo.png')}
            style={styles.newImage}
          />
        </View>

        <StatusBar />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  topBar: {
    height: 210,
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    top: -90,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  topBarText: {
    fontSize: 28,
    color: '#fff',
    fontStyle: 'normal',
    marginTop: 120,
    marginLeft: -220,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: -120,
    marginTop: 700,
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  imageContainer: {
    position: 'absolute',
    top: '14%',
  },
  logoImage: {
    width: 50,
    height: 65,
    borderRadius: 20,
    marginLeft: 305.5,
    marginTop: -57,
  },
  newImageContainer: {
    position: 'absolute',
    top: '33%', // Ajuste a posição conforme necessário
    left: '23%', // Ajuste a posição conforme necessário
    transform: [{ translateX: -50 }, { translateY: -50 }], // Centraliza a nova imagem
  },
  newImage: {
    width: 300, // Ajuste a largura conforme necessário
    height: 540, // Ajuste a altura conforme necessário
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
  },
  middleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 0,
    zIndex: 1, // Define a ordem de sobreposição dos botões
  },
  containerlevel1: {
    position: "relative",
    zIndex: 1,
    marginBottom: 130
  },
  middleButton1: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 260,
    marginTop: -300,
    marginLeft: 140,
  },
  containerlevel2: {
    position: "relative",
    zIndex: 1,
    marginTop: 0,
    marginBottom: 100
  },
  middleButton2: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: -375,
    marginBottom: 250,
    marginLeft: 80,
  },
  containerlevel3: {
    position: "relative",
    zIndex: 1,
  },
  middleButton3: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 340,
    marginTop: -390,
    marginLeft: 50,
  },
  containerlevel4: {
    position: "relative",
    zIndex: 1
  },
  middleButton4: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: -380,
    marginBottom: 250,
    marginLeft: 160,
  },
  containerlevel5: {
    position: "relative",
    zIndex: 1
  },
  middleButton5: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 270,
    marginTop: -300,
    marginLeft: 170,
  },
  containerlevel6: {
    position: "relative",
    zIndex: 1
  },
  middleButton6: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: -300,
    marginBottom: 450,
    marginLeft: 290,
  },
  containerlevel7: {
    position: "relative",
    zIndex: 1
  },
  middleButton7: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 340,
    marginTop: -415,
    marginLeft: 240,
  },
  containerlevel8: {
    position: "relative",
    zIndex: 1,
    marginBottom: -130,
  },
  middleButton8: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: -390,
    marginBottom: 250,
    marginLeft: 130,
  },
  containerlevel9: {
    position: "relative",
    zIndex: 1,
    marginTop: 100
  },
  middleButton9: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 420,
    marginTop: -300,
    marginLeft: 250,
  },
  containerlevel10: {
    position: "relative",
    zIndex: 1,
    marginBottom: -390,
  },
  middleButton10: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: -380,
    marginBottom: 250,
    marginLeft: 185,
  },
  buttonNumber: {
    color: 'white',
    fontSize: 25,
    zIndex: 1,
    height: 40,
    width: 50,
    marginLeft: 35,
  },
  buttonNumber10: {
    color: 'white',
    fontSize: 25,
    zIndex: 1,
    height: 40,
    width: 50,
    marginLeft: 20,
  },
});
