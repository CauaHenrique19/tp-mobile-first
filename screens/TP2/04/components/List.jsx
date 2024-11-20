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
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: 8,
  },
});

export default List;
