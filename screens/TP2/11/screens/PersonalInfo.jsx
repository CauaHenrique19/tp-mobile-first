import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PersonalInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações Pessoais</Text>
      <Text>Nome: João da Silva</Text>
      <Text>Idade: 30 anos</Text>
      <Text>Localização: São Paulo, Brasil</Text>
      <Text>Contato: joao.silva@email.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
