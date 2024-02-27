import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { database } from '../../config/firebaseConfig'; // Importe a instância do Firestore
import { getAuth } from 'firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';

export default function Report() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [filteredGastos, setFilteredGastos] = useState<any[]>([]);
  const [userUid, setUserUid] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [salario, setSalario] = useState<number>(0);
  const [totalGastos, setTotalGastos] = useState<number>(0);
  const [percentGastosFixos, setPercentGastosFixos] = useState<number>(0);
  const [percentLazer, setPercentLazer] = useState<number>(0);
  const [percentInesperado, setPercentInesperado] = useState<number>(0);
  const [flatListHeight, setFlatListHeight] = useState<number>(1200); // Estado para controlar a altura da FlatList

  const fetchFilteredGastos = async (uid: string) => {
    try {
      const db = database; // Obtenha a instância do Firestore
      const gastosCollection = collection(db, 'gastos'); // Obtenha a coleção 'gastos'
      let q = query(
        gastosCollection,
        where('uid', '==', uid)
      );

      if (selectedType) {
        q = query(q, where('tipoDeGasto', '==', selectedType));
      }

      const querySnapshot = await getDocs(q);
      const filteredGastos = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        // Formatando o timestamp para 'dd/mm/aaaa'
        data.timestamp = new Date(data.timestamp.seconds * 1000).toLocaleDateString('pt-BR');
        return data;
      });
      setFilteredGastos(filteredGastos);

      // Calcular o total de gastos
      const total = filteredGastos.reduce((acc, gasto) => acc + gasto.valor, 0);
      setTotalGastos(total);

      // Calcular as porcentagens de gastos em relação ao salário
      const gastosFixos = filteredGastos.filter(gasto => gasto.tipoDeGasto === 'Fixo').reduce((acc, gasto) => acc + gasto.valor, 0);
      const lazer = filteredGastos.filter(gasto => gasto.tipoDeGasto === 'Lazer').reduce((acc, gasto) => acc + gasto.valor, 0);
      const inesperado = filteredGastos.filter(gasto => gasto.tipoDeGasto === 'Inesperado').reduce((acc, gasto) => acc + gasto.valor, 0);

      setPercentGastosFixos((gastosFixos / salario) * 100);
      setPercentLazer((lazer / salario) * 100);
      setPercentInesperado((inesperado / salario) * 100);

      // Ajuste da altura da FlatList com base no número de gastos
      setFlatListHeight(300 + filteredGastos.length * 50);
    } catch (error) {
      console.error('Erro ao buscar gastos filtrados:', error);
    }
  };

  useEffect(() => {
    const fetchSalario = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          // Obter o salário do usuário do Firestore
          // Substitua 'users' e 'salaryField' pelo caminho correto no seu Firestore
          const userDocRef = await getDoc(doc(database, 'users', user.uid));
          const userData = userDocRef.data();
          if (userData && userData.salario) {
            setSalario(userData.salario);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar salário do usuário:', error);
      }
    };

    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserUid(user.uid);
      fetchFilteredGastos(user.uid);
      fetchSalario();
    } else {
      navigation.navigate('signin');
    }
  }, [selectedType]);

  const handleFilterButtonClick = () => {
    // Re-filtrar os gastos quando o botão de filtro for pressionado
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      fetchFilteredGastos(user.uid);
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <Text style={styles.tipogasto}>Tipo de Gasto: {item.tipoDeGasto}</Text>
      <Text style={styles.tipogasto}>Data do Gasto: {item.timestamp}</Text>
      <Text style={styles.tipogasto}>Valor: {item.valor}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#fff', '#000000']} style={styles.linearGradient}>    
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Relatório de gastos</Text>
        </View>

        <View style={styles.itens}>
          <Button title="Fixos" onPress={() => setSelectedType("fixos")} color="#000000" />
          <Button title="Transporte" onPress={() => setSelectedType("transporte")} color="#000000" />
          <Button title="Lazer" onPress={() => setSelectedType("lazer")} color="#000000" />
          <Button title="Inesperado" onPress={() => setSelectedType("inesperados")} color="#000000" />
          <Button title="Investimentos" onPress={() => setSelectedType("investimento")} color="#000000" />
          <Button title="Limpar Filtro" onPress={() => setSelectedType(null)} color="#000000" />
          <Button title="Filtrar" onPress={handleFilterButtonClick} color="#000000" />
          <FlatList
            data={filteredGastos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} // Garante que a FlatList tenha altura se não houver itens
            style={{ height: flatListHeight }} // Altura dinâmica da FlatList
          />
        </View>

        <View style={styles.gastos}>
          <Text style={styles.whiteText}>Total Gasto: R$ {totalGastos.toFixed(2)}</Text>
          <Text style={styles.whiteText}>Porcentagem de Gastos Fixos: {percentGastosFixos.toFixed(2)}%</Text>
          <Text style={styles.whiteText}>Porcentagem de Gastos com Lazer: {percentLazer.toFixed(2)}%</Text>
          <Text style={styles.whiteText}>Porcentagem de Gastos Inesperados: {percentInesperado.toFixed(2)}%</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#DCDCDC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    position: "relative",
    borderRadius: 20,
  },
  itens: {
    marginTop: 230
  },
  whiteText: {
    color: '#ffffff',
    position: "relative",
    fontSize: 13,
  },
  gastos: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 90,
    backgroundColor: 'black', // Adicione uma cor de fundo para o container gastos
    borderRadius: 10, // Adicione bordas arredondadas
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  topBar: {
    height: 200,
    width: '100%',
    backgroundColor: '#000',
    position: "absolute",
    top: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    fontSize: 28,
    color: '#fff',
  },
  tipogasto: {
    fontSize: 15
  },
});