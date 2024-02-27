import React, { useState, useEffect } from 'react';
import { StatusBar, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';
import { LinearGradient } from 'expo-linear-gradient';
import { getDoc, doc, collection, setDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { database } from '../../config/firebaseConfig';
import RNPickerSelect from 'react-native-picker-select';

export default function New() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [valorGasto, setValorGasto] = useState('');
  const [tipoDeGasto, setTipoDeGasto] = useState('');
  const [userUid, setUserUid] = useState<string | null>(null);
  

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid); // Armazena o UID do usuário no estado
      } else {
        navigation.navigate("signin");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const enviarParaBancoDeDados = async () => {
    try {
      const gastosCollection = collection(database, 'gastos');

      const novoGasto = {
        valor: parseFloat(valorGasto),
        tipoDeGasto: tipoDeGasto,
        timestamp: new Date(),
        uid: userUid, // Adiciona o UID do usuário aos dados do gasto
      };

      await setDoc(doc(gastosCollection), novoGasto);
      console.log('Valor enviado com sucesso para o banco de dados!');
      navigation.goBack(); // Voltar para a página anterior (Home)
    } catch (error) {
      console.error('Erro ao enviar valor para o banco de dados:', error);
    }
  };

  return (
    <LinearGradient colors={['#808080', '#000']} style={styles.linearGradient}>
        <View style={styles.container}>
          {/* Barra cinza na parte superior */}
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>Novo gasto</Text>
          </View>

          {/* Container no meio da página para colocar ou mostrar itens */}
          <View style={styles.containerDoMeio}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Digite o valor"
              value={valorGasto}
              onChangeText={(text) => setValorGasto(text)}
            />
            <RNPickerSelect
              onValueChange={(value) => setTipoDeGasto(value)}
              items={[
                { label: 'Lazer', value: 'lazer'},
                { label: 'Investimentos', value: 'investimento'},
                { label: 'Transporte', value: 'transporte'},
                { label: 'Fixos', value: 'fixos'},
                { label: 'Inesperados', value: 'inesperados'},
              ]}
              style={{
                inputIOS: styles.input,
                inputAndroid: styles.input,
              }}
            />
            <TouchableOpacity style={styles.buttonnew} onPress={enviarParaBancoDeDados} >
              <Text style={styles.buttontextnew}>Enviar gasto</Text>
            </TouchableOpacity>
          </View>

          <StatusBar />
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor: "transparent"
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 300,
  },
  topBar: {
    height: 210,
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    top: -90,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    fontSize: 30,
    color: '#fff',
    marginTop: 120,
    marginRight: 140,
    width: 200,
  },
  topContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 15,
    width: '100%',
  },
  greetingText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: -80,
    fontStyle: "normal",
  },
  containerDoMeio: {
    position: "relative",
    backgroundColor: 'white',
    marginVertical: 10,
    height: 200, 
    width: 350,
    marginTop: 80,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: "auto",
    bottom: -200,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    color: 'black',
    borderRadius: 10,
  },
  buttonnew: {
    backgroundColor: "#000",
    justifyContent: "center",
    height: 40,
    width: 300,
    borderRadius: 15,
    marginTop: 10,
  },
  buttontextnew: {
    color: "#fff",
    textAlign: "center"
  }
});
