import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { database } from '../../config/firebaseConfig';
import { collection, setDoc, doc } from 'firebase/firestore';

export default function Cadastro() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const enviarUserParaDatabase = async () => {
    if (password !== confirmPassword) {
      setError('As senhas informadas são diferentes');
      return;
    }

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userUid = userCredential.user.uid;

      const userCollection = collection(database, 'users');

      const dadosUser = { username: username, email: email, completedlevels: 0 }; // Adicionando completedlevels com valor 0
      await setDoc(doc(userCollection, userUid), dadosUser);
      console.log('Usuário e dados salvos com sucesso no banco de dados!');
      navigation.navigate('main');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <LinearGradient colors={['#808080', '#000']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.containerlogo}>
          <Animatable.Image
            delay={500}
            animation="flipInY"
            source={require('../../../assets/logo.png')}
            style={styles.imagelogo}
          />
          <TouchableOpacity onPress={() => navigation.navigate('initial')} style={styles.touchable}>
            <Image source={require('../../../assets/flecha.png')} style={styles.imageflecha} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Cadastro</Text>

        <Animatable.View animation="fadeInUp" style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirme a senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </Animatable.View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <Animatable.View animation="fadeInUp">
          <TouchableOpacity style={styles.button} onPress={enviarUserParaDatabase}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </Animatable.View>
      </View>

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
  title: {
    fontSize: 30,
    marginBottom: 16,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'black',
    backgroundColor: '#808080',
    borderWidth: 1.5,
    borderRadius: 16,
    marginBottom: 5,
    paddingHorizontal: 10,
    color: '#000000',
  },
  button: {
    backgroundColor: '#808080',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: -70,
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
    marginTop: -80,
    marginBottom: 30,
  },
  imagelogo: {
    width: 142,
    height: 180,
    resizeMode: 'cover',
  },
  imageflecha: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  touchable: {
    position: 'absolute',
    top: -40,
    left: -125,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 4,
    color: '#000',
  },
});
