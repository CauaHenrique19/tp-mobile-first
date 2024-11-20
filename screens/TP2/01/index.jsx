import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import List from "./src/components/List";

const App = () => {
  const items = ["Exercício 1", "Exercício 2", "Exercício 3", "Exercício 4"];

  return (
    <SafeAreaView style={styles.container}>
      <List items={items} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
