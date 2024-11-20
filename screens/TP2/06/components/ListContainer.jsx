import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const ListContainer = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default ListContainer;
