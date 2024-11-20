import React from "react";
import { View, StyleSheet } from "react-native";
import GridItem from "./GridItem";

const Grid = ({ items }) => {
  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <GridItem key={item.id} title={item.title} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default Grid;
