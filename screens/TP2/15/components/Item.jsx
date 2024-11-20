import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Item = ({ item, onLike, onDislike }) => (
  <View style={styles.itemContainer}>
    <Text>{item}</Text>
    <Button title="Like" onPress={onLike} />
    <Button title="Dislike" onPress={onDislike} />
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
});

export default Item;
