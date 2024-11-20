import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CarouselItem = ({ title, color }) => {
  return (
    <View style={[styles.item, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CarouselItem;
