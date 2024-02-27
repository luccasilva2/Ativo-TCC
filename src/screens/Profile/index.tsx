import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';
import { getAuth, onAuthStateChanged, deleteUser } from 'firebase/auth';
import { getDoc, doc, deleteDoc } from 'firebase/firestore';
import { database } from '../../config/firebaseConfig';

export default function Profile() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(database, 'users', user.uid));
          const userData = userDoc.data();
          setUserData(userData);
        } catch (error) {
          console.error("Erro ao obter dados do usuário:", error);
        }
      } else {
        navigation.navigate("signin");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await auth.signOut();
      navigation.navigate('initial');
    } catch (error) {
      console.log('Erro ao fazer logout:', error);
    }
  };

  const handleSessao = async () => {
    try {
      const auth = getAuth();
      await auth.signOut();
      navigation.navigate('signin');
    } catch (error) {
      console.log('Erro ao sair da sessão:', error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const auth = getAuth();
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

  if (!userData) {
    return null;
  }

  const userName = userData.username || "Usuário";

  return (
    <LinearGradient
      colors={['#808080', '#000']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.topContainer}>
            <Text style={styles.greetingText}>Perfil</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.containerWhite}>
          <View style={styles.whiteSquare}>
            <View style={styles.containerText}>
              {userName && <Text style={styles.userName}>{userName}</Text>}
            </View>
          </View>
          <View style={styles.middleContainer}>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={handleDeleteUser}
            >
              <Text style={styles.bottomButtonText}>Excluir conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={handleSessao}
            >
              <Text style={styles.bottomButtonText}>Encerrar sessão</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={handleLogout}
            >
              <Text style={styles.bottomButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  containerWhite: {
    alignItems: 'center',
    backgroundColor: '#363636',
    position: 'absolute',
    top: 160,
    bottom: 0,
    left: 23,
    right: 0,
    zIndex: 1,
    height: 540,
    width: 337,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  whiteSquare: {
    position: 'absolute',
    top: 100,
    bottom: 0,
    left: 8,
    right: 0,
    height: 120,
    width: 320,
    backgroundColor: '#696969',
    zIndex: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
    marginTop: -95,
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
  },
  middleButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: 150,
    backgroundColor: '#000',
    borderRadius: 30,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: -3,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    zIndex: 3,
  },
  middleButtonText: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
  },
  topBar: {
    height: 210,
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    marginLeft: 0,
    top: -90,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  topContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: '100%',
  },
  greetingText: {
    fontSize: 40,
    color: "#fff",
    marginTop: 110,
    marginBottom: 0,
    fontStyle: "normal",
    marginLeft: -240,
  },
  containerText: {
    alignItems: 'center',
    marginTop: 28,
    marginLeft: 0,
  },
  userName: {
    fontSize: 26,
    color: '#fff',
    marginTop: 3,
    zIndex: 3,
    width: '100%',
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
    marginTop: -71,
  },
  bottomContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  bottomButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    width: 300,
    height: 50,
    marginBottom: 60,
  },
  bottomButtonText: {
    fontSize: 17,
    color: '#fff',
    marginBottom: -5,
    textAlign: "center",
    marginTop: -5,
  },
});
