import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ListItem = ({ text }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  itemText: {
    fontSize: 16,
    color: "#333333",
  },
});

export default ListItem;
