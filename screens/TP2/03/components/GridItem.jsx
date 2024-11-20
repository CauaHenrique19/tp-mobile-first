import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GridItem = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "45%",
    aspectRatio: 1,
    margin: 8,
    backgroundColor: "#4caf50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default GridItem;
