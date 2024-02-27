import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../routes/types';
import { doc, updateDoc } from 'firebase/firestore';
import { database } from '../../../config/firebaseConfig';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const NovaPagina: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [userId, setUserId] = useState<string | null>(null);
  const [completedlevels, setCompletedLevel] = useState<number>(2);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        // Usuário não autenticado, pode redirecionar para a tela de login se necessário
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Função para registrar a página concluída no Firestore
  async function registerCompletedLevel(level: number) {
    try {
      if (!userId) {
        console.error("ID do usuário não encontrado");
        return;
      }

      const userRef = doc(database, 'users', userId);

      // Atualize o campo "completedPages" com o novo número da página
      await updateDoc(userRef, {
        completedlevels: level,
      });

      console.log(`Nível ${level} registrado para o usuário com ID ${userId}.`);
    } catch (error) {
      console.error("Erro ao registrar a página concluída:", error);
    }
  }

  return (
    <LinearGradient
      colors={['white', 'black']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text style={styles.textoNoMeio}>
          Parabéns, você completou mais um nível, o nível {completedlevels}, fique orgulhoso! Continue assim e você vai longe!!!
        </Text>
        <View style={styles.quadradoVermelho}></View>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            // Chame a função para registrar a página concluída
            registerCompletedLevel(completedlevels);
            // Atualize a variável de estado para a próxima página
            setCompletedLevel(completedlevels + 1);
            // Navegue para a próxima tela
            navigation.navigate("Study");
          }}
        >
          <Text style={styles.textoBotao}>Próxima Etapa</Text>
          {/* Adicione o conteúdo do botão aqui */}
        </TouchableOpacity>
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
  textoNoMeio: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    position: 'absolute', // Para sobrepor o quadrado
    zIndex: 2,
    width: 200,
  },
  quadradoVermelho: {
    width: 300,
    height: 500,
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 1, // Garante que o quadrado fique acima do texto
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  botao: {
    backgroundColor: '#000',
    marginTop: 600,
    zIndex: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    },
    textoBotao: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
    },
  });

  export default NovaPagina;
