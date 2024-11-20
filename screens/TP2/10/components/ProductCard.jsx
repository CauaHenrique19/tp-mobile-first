import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ProductCard = ({ produto, onAdd }) => (
  <View style={styles.card}>
    <Text>{produto.nome}</Text>
    <Text>R$ {produto.preco.toFixed(2)}</Text>
    <Button title="Adicionar" onPress={() => onAdd(produto)} />
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

export default ProductCard;
