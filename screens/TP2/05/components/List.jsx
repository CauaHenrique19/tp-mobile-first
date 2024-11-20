import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start", // Alinha os itens à esquerda
    justifyContent: "flex-start", // Garante que os itens fiquem no topo
  },
});

export default List;
