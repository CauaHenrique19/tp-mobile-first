import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ListContainer from "./components/ListContainer";

export default function App() {
  const items = [
    "Comprar mantimentos",
    "Fazer exercícios",
    "Ler um livro",
    "Assistir a um filme",
    "Planejar a semana",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ListContainer items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
});
