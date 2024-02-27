import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { auth, database } from '../../config/firebaseConfig';
import { RootStackNavigationProp } from '../../routes/types';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

export default function Config() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [userData, setUserData] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado para armazenar a URL da imagem selecionada

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        const { uid } = currentUser;
        console.log('UID do usuário:', uid);
        const userDoc = await getDoc(doc(database, 'users', uid));
        const userData = userDoc.data();
        console.log('Dados do usuário:', userData);
        if (userData) {
          setUserData(userData);
        } else {
          console.log('Dados do usuário não encontrados.');
        }
      } catch (error) {
        console.log("Erro ao obter dados do usuário:", error);
      }
    } else {
      setUserData(null);
      navigation.navigate("signin");
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('initial');
    } catch (error) {
      console.log('Erro ao fazer logout:', error);
    }
  };

  const handleSessao = async () => {
    try {
      await auth.signOut();
      navigation.navigate('signin');
    } catch (error) {
      console.log('Erro ao sair da sessão:', error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.log('Usuário não autenticado.');
        return;
      }

      console.log('Deletando usuário:', currentUser.uid);
      await deleteDoc(doc(database, 'users', currentUser.uid));
      await deleteUser(currentUser);
      navigation.navigate('initial');
    } catch (error) {
      console.log('Erro ao excluir conta:', error);
    }
  };


  const userName = userData?.username || "Usuário";

  return (
    <LinearGradient
      colors={['#000', '#fff']}
      style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Configurações</Text>
      </View>
      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDeleteUser}>
          <Text style={styles.buttonText}>Excluir conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSessao}>
          <Text style={styles.buttonText}>Encerrar sessão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    height: 210,
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    marginLeft: 0.8,
    top: -90,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  topBarText: {
    fontSize: 30,
    color: '#fff',
    marginTop: 130,
    marginBottom: 0,
    fontStyle: 'normal',
    marginLeft: 0,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
    height: 600,
    width: 330,
    zIndex: 1,
    backgroundColor: '#4F4F4F',
    marginBottom: 60,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#000',
    width: 300,
    height: 50,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 15,
    color: '#000',
    marginBottom: -5,
    textAlign: "center"
  },
});
