import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ text }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ListItem;
