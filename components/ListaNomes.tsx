import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListaNomes = () => {
  const nomes = ["Ana Maria", "Bruno Alves", "Carlos José", "Daniel Martins", "Efraim Gomes", "Francisco Junior"];
  const [listaNomes, setListaNomes] = useState([]);

  useEffect(() => {
    // Carregue a lista de nomes aqui
    setListaNomes(nomes);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={listaNomes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.nome}>{item}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ListaNomes;
