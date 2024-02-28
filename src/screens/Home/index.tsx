import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';
import { LinearGradient } from 'expo-linear-gradient';
import { doc, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { database } from '../../config/firebaseConfig';
import ProgressBar from '../ProgressBar'; // Importe o componente UserProfile
import Alterarnome from '../Gastos'; // Importe o componente Report

export default function Home() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(database, 'users', user.uid);
          const unsubscribeSnapshot = onSnapshot(userDocRef, (doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              setUserData(userData);
            } else {
              console.error("Documento do usuário não encontrado.");
            }
          });

          return () => unsubscribeSnapshot();
        } catch (error) {
          console.error("Erro ao obter dados do usuário:", error);
        }
      } else {
        navigation.navigate("signin");
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, [navigation]);

  if (!userData) {
    return null;
  }

  const userName = userData.username || "Usuário";

  return (
    <LinearGradient colors={['#808080', '#000']} style={styles.linearGradient}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {/* Barra cinza na parte superior */}
          <View style={styles.topBar}/>

          {/* Parte superior da página com saudação e nome do usuário */}
          <View style={styles.topContainer}>
            <Text style={styles.greetingText}>Olá, {userName}</Text>
          </View>

          {/* Container específico para a imagem no centro da tela */}
          <View style={styles.imageContainer}>
            <Image source={require('../../../assets/logo.png')} style={styles.logoImage} />
          </View>

          {/* Container no meio da página para colocar ou mostrar itens */}
          <LinearGradient colors={['#808080', '#000']} style={styles.containerDoMeio}>
            {/* Conteúdo do containerDoMeio */}
            <Alterarnome />
          </LinearGradient>

          {/* Parte inferior da página com ícones e botões */}
          <View style={styles.bottomContainer1}>
            {/* Botões no meio da página */}
            <View style={styles.buttonContainer1}>
              <View style={styles.buttonWrapper1}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("new")}>
                  <Text style={styles.buttonText1}>Adição de gasto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("calculadora")}>
                  <Text style={styles.buttonText2}>Calculadora</Text>
                </TouchableOpacity>

                  {/* Parte inferior da página com ícones e botões */}
          <View style={styles.bottomContainer2}>
            {/* Botões no meio da página */}
            <View style={styles.buttonContainer2}>
              <View style={styles.buttonWrapper2}>
                <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate("calculadoracompostos")}>
                  <Text style={styles.buttonText3}>Juros Compostos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate("report")}>
                  <Text style={styles.buttonText4}>Extrato</Text>
                </TouchableOpacity>


            {/* Parte inferior da página com ícones e botões */}
              <View style={styles.bottomContainer3}>
                {/* Botões no meio da página */}
                <View style={styles.buttonContainer3}>
                  <View style={styles.buttonWrapper3}>
                    <TouchableOpacity style={styles.button5} onPress={() => navigation.navigate("informacoes")}>
                      <Text style={styles.buttonText5}>Informações básicas</Text>
                    </TouchableOpacity>

                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <ProgressBar navigation={navigation}/>

          {/* Adicione o código para o bottomContainer2 e bottomContainer3 aqui */}

        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor: "transparent"
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100,
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
  imageContainer: {
    position: 'absolute',
    top: '14%',
  },
  logoImage: {
    width: 50,
    height: 65,
    borderRadius: 20,
    marginLeft: 280,
    marginTop: -57,
  },
  containerDoMeio: {
    backgroundColor: '#696969',
    marginVertical: 10,
    height: 200, 
    width: 335,
    marginTop: 80,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 1,
    borderWidth: 1,
  },
  bottomContainer1:{
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
  },
  buttonContainer1: {
    alignItems: 'center',
  },
  buttonWrapper1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  bottomContainer2:{
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',
  },
  buttonContainer2: {
    alignItems: 'center',
  },
  buttonWrapper2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  bottomContainer3:{
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
  },
  buttonContainer3: {
    alignItems: 'center',
  },
  buttonWrapper3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  button1: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 8,
    marginBottom: 200,
    marginTop: 0,
    width: 160,
    height: 50
  },
  button2: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 200,
    marginTop: 0,
    width: 160, 
    height: 50,
    marginRight: -40,
    marginLeft: 8
  },
  button3: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 20,
    marginTop: 50,
    width: 160,
    height: 50,
    marginLeft: -275,
    marginRight: 8
  },
  button4: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: 8,
    marginBottom: 20,
    marginTop: 50,
    width: 160, 
    height: 50,
  },
  button5: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 20,
    marginTop: 110,
    width: 335,
    height: 50,
    marginLeft: -345,
    marginRight: 8,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    width: 120
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText3: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    width: 115,
  },
  buttonText4: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText5: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  gastoItem: {
    backgroundColor: '#DCDCDC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    position: "relative",
    borderRadius: 20,
  },
  gastoTipo: {
    fontSize: 15
  },
  gastoValor: {
    fontSize: 15
  },
});