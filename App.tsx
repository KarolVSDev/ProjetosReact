import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // Função para lidar com o clique do botão
  const handlePress = () => {
    console.log("Botão clicado!");
    Alert.alert("Confirmação", "Você confirmou que quer aprender!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eu estou aprendendo React Native</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Vamos aprender juntos?</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
