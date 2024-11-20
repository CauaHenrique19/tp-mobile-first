import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import List from "./components/List";

export default function App() {
  const items = ["Exercício 1", "Exercício 2", "Exercício 3", "Exercício 4"];

  return (
    <SafeAreaView style={styles.container}>
      <List items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
});
