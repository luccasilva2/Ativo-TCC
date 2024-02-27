import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { database } from '../../config/firebaseConfig'; // Importe a instância do Firestore
import { getAuth } from 'firebase/auth';

export default function Report() {
  const [filteredGastos, setFilteredGastos] = useState<any[]>([]);
  const [flatListHeight, setFlatListHeight] = useState<number>(1200); // Estado para controlar a altura da FlatList

  const fetchFilteredGastos = (uid: string) => {
    try {
      const db = database; // Obtenha a instância do Firestore
      const gastosCollection = collection(db, 'gastos'); // Obtenha a coleção 'gastos'
      let q = query(
        gastosCollection,
        where('uid', '==', uid)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const filteredGastos = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          // Formatando o timestamp para 'dd/mm/aaaa'
          data.timestamp = new Date(data.timestamp.seconds * 1000).toLocaleDateString('pt-BR');
          return data;
        });
        setFilteredGastos(filteredGastos);

        // Ajuste da altura da FlatList com base no número de gastos
        setFlatListHeight(300 + filteredGastos.length * 50);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Erro ao buscar gastos filtrados:', error);
    }
  };

  useEffect(() => {
    const fetchGastos = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          fetchFilteredGastos(user.uid);
        }
      } catch (error) {
        console.error('Erro ao buscar gastos:', error);
      }
    };

    fetchGastos();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <Text style={styles.tipogasto}>Tipo de Gasto: {item.tipoDeGasto}</Text>
      <Text style={styles.tipogasto}>Data do Gasto: {item.timestamp}</Text>
      <Text style={styles.tipogasto}>Valor: {item.valor}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containergastos}>
        <FlatList
          data={filteredGastos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} // Garante que a FlatList tenha altura se não houver itens
          style={{ height: flatListHeight }} // Altura dinâmica da FlatList
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "transparent"
  },
  item: {
    backgroundColor: '#4f4f4f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    height: 150,
    width: 300,
    marginTop: -0,
    borderWidth: 3,
    borderColor: '#000',
  },
  whiteText: {
    color: '#ffffff',
    fontSize: 13,
  },
  tipogasto: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10
  },
  containergastos: {
    height: 150,
    width: 333,
    marginTop: 0
  },
});
