import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CartItem = ({ item }) => (
  <View style={styles.card}>
    <Text>{item.nome}</Text>
    <Text>Quantidade: {item.quantidade}</Text>
    <Text>Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
  },
});

export default CartItem;
