import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

const TelaProdutos = ({ produtos, onAddToCart, onViewCart }) => (
  <View style={styles.container}>
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductCard produto={item} onAdd={onAddToCart} />
      )}
    />
    <Button title="Ver Carrinho" onPress={onViewCart} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TelaProdutos;
