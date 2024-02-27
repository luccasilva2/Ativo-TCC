import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
          Text, 
          View, 
          TextInput, 
          TouchableOpacity, 
          Image } 
          from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from "react-native-animatable"

export default function SignIn() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const Login = () => {
    setLoading(true);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("main");
      })
      .catch((error) => {
        setErrorLogin("Email ou senha incorreto.");
        console.log(error.message)
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <LinearGradient
      colors={['#808080', '#000']}
      style={styles.container}
    >
      <View 
      style={styles.container}>

        <View 
        style={styles.containerlogo}>

          <Animatable.Image
            delay={500}
            animation="flipInY"
            source={require("../../../assets/logo.png")}
            style={styles.imagelogo}
          />
          <TouchableOpacity 
          onPress={() => navigation.navigate('initial')} 
          style={styles.touchable}>

            <Image
              source={require("../../../assets/flecha.png")}
              style={styles.imageflecha}
            />
          </TouchableOpacity>

          <Text 
          style={styles.title}>Entrar</Text>

          <Animatable.View
          animation="fadeInUp" 
          style={styles.inputContainer}>

            <Text 
            style={styles.inputLabel}>Email</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Animatable.View>

          <Animatable.View 
          animation="fadeInUp"
          style={styles.inputContainer}>

            <Text 
            style={styles.inputLabel}>Senha</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </Animatable.View>

          {errorLogin &&
          <Text style={styles.errorText}>{errorLogin}</Text>}

        <Animatable.View
        animation="fadeInUp">
          
          <TouchableOpacity 
          style={styles.button} 
          onPress={Login} 
          disabled={loading}>

            <Text 
            style={styles.buttonText}>{loading ? 'Entrando...' : 'Entrar'}</Text>

          </TouchableOpacity>
            </Animatable.View>

          <StatusBar style="auto" />

        </View>
      </View>

      <StatusBar style="auto" />

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 25,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'black',
    backgroundColor: "#808080",
    borderWidth: 1.5,
    borderRadius: 16,
    marginBottom: 5,
    paddingHorizontal: 10,
    color: "#000000"
  },
  button: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  containerlogo: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 100
  },
  imagelogo: {
    width: 155,
    height: 200,
    resizeMode: 'cover',
  },
  imageflecha: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  touchable: {
    position: 'absolute',
    top: -90,
    left: -65,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  inputLabel: {
    marginBottom: 4,
    color: '#000',
  },
});