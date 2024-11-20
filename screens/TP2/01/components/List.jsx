import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const List = ({ items }) => (
  <View style={styles.container}>
    {items.map((item, index) => (
      <ListItem key={index} item={item} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
  },
});

export default List;
