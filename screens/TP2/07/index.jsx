import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  const items = [
    { id: "1", text: "Comprar leite" },
    { id: "2", text: "Estudar React Native" },
    { id: "3", text: "Fazer exercícios" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem text={item.text} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Alinha os itens na base do contêiner
    backgroundColor: "#f0f0f0",
  },
  listContainer: {
    paddingBottom: 20, // Espaço inferior para melhor visualização
  },
});
