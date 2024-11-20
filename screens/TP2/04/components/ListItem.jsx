import React from "react";
import { Text, StyleSheet } from "react-native";

const ListItem = ({ text }) => {
  return <Text style={styles.item}>{text}</Text>;
};

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    color: "#333",
    marginVertical: 8,
    textAlign: "right",
  },
});

export default ListItem;
