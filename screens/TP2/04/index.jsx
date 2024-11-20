import React from "react";
import { StyleSheet, View } from "react-native";
import List from "./components/List";

export default function App() {
  const items = [
    "Comprar frutas",
    "Fazer exercícios",
    "Ler um livro",
    "Organizar documentos",
    "Estudar React Native",
  ];

  return (
    <View style={styles.container}>
      <List items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});
