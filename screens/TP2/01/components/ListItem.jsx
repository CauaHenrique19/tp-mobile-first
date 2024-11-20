import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{item}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 1,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default ListItem;
