import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import ListaNomes from './components/ListaNomes';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/01-adesivo-umbrella-biohazard-residente-evil-14x15-playstation-removebg-preview.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            Selecionados para a Operação Racoon City
          </Text>
        </Text>
      </View>
      <ListaNomes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center', // Alinhar o texto ao centro
  },
  boldText: {
    fontSize: 24, // Aumentar o tamanho do texto
    fontWeight: 'bold', // Deixar o texto em negrito
  },
});

export default App;
