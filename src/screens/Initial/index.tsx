import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
          Text,
          View,
          TouchableOpacity,
          Image } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from "react-native-animatable"


export default function Initial() {
  const navigation = useNavigation<RootStackNavigationProp>();


  return (


    <LinearGradient
      colors={['#808080', '#000']}
      style={styles.container}
    >
      <View style={styles.containerlogo}>
        <Animatable.Image
          delay={600}
          animation="fadeInUp"
          source={require("../../../assets/logo.png")}
          style={styles.imagelogo} />


        {/* View do texto junto com o botão de entrar */}
        <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.gradientContainer}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("signin")}>


            <Text
            style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>


          {/* View do texto junto com o botão de cadastro */}
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("signup")}>


            <Text
            style={styles.buttonText}>Cadastro</Text>
          </TouchableOpacity>
        </Animatable.View>


      {/* Criadores no final da página */}
      <Animatable.View
      delay={600}
      animation="fadeInUp"
      style={styles.criadoresContainer}>


        <Text
        style={styles.criadores}>Criado e produzido por </Text>


        <Text
        style={styles.bolsoCerto}>Ativo</Text>


      </Animatable.View>
        </View>
          <StatusBar/>
            <View/>
              </LinearGradient>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: 200,
    marginHorizontal: 10,
    backgroundColor: '#808080',
    borderRadius: 30,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: -70,
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerlogo: {
    alignItems: 'center',
    marginTop: -200,
    marginBottom: 30,
  },
  imagelogo: {
    width: 250,
    height: 325,
    resizeMode: 'cover',
  },
  criadoresContainer: {
    marginTop: 150,
    marginBottom: -200,
    flexDirection: 'row',
  },
  criadores: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: "italic",
  },
  bolsoCerto: {
    color: '#696969',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: "italic",
  },
  }
);



