import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore'; // Adicionei onSnapshot
import { NavigationProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; // Importando LinearGradient
import { database } from '../../config/firebaseConfig';

interface UserData {
  username: string;
  completedlevels: number;
}

interface UserProfileProps {
  navigation: NavigationProp<any>; // Certifique-se de que a propriedade navigation esteja definida nas props
}

const UserProfile: React.FC<UserProfileProps> = ({ navigation }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(database, 'users', user.uid);
          
          // Adicionando o listener de snapshot para atualizações em tempo real
          const unsubscribeSnapshot = onSnapshot(userDocRef, (doc) => {
            if (doc.exists()) {
              const userData = doc.data() as UserData;
              setUserData(userData);
  
              // Atualizar o progresso com base nos níveis completos
              const userCompletedLevels = userData.completedlevels;
              setCompletedLevels(userCompletedLevels);
              const newProgress = (userCompletedLevels / 10) * 100; // Supondo que há 10 níveis
              setProgress(newProgress);
            } else {
              console.error("Documento do usuário não encontrado");
            }
          });
          
          return () => {
            unsubscribeSnapshot(); // Remover o listener de snapshot ao desmontar o componente
          };
        } catch (error) {
          console.error("Erro ao obter dados do usuário:", error);
        }
      } else {
        navigation.navigate("signin"); // Certifique-se de que navigation não é nulo antes de usá-lo
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]); // Certifique-se de incluir navigation na lista de dependências do useEffect

  if (!userData) {
    return null;
  }

  const userName = userData.username || "Usuário";

  return (
    <View style={styles.container}>
      <View style={styles.containertela}>
        <View style={styles.progressBar}>
          {/* Adicionando LinearGradient dentro de progressBar */}
          <LinearGradient
            colors={['#808080', '#000']}
            style={{ flex: 1, borderRadius: 10 }}
          >
            {/* Adicione o conteúdo da progressBar aqui dentro do LinearGradient */}
            <View style={{ width: `${progress}%`, height: '100%', backgroundColor: 'green', borderRadius: 7}} />      
          </LinearGradient>
        </View>
        
        {completedLevels !== null && <Text style={styles.progressText}>Progresso: {progress}%</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },
  progressBar: {
    width: '90%',
    height: 25,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    overflow: 'hidden', // Para garantir que o LinearGradient não ultrapasse os limites da progressBar
  },
  progressText: {
    fontSize: 19,
    color: '#fff',
    marginTop: 10,
  },
  containertela: {
    height: 130,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 15,
    bottom: 20,
    left: 0,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4f4f4f',
    paddingVertical: 20,
  }
});

export default UserProfile;
