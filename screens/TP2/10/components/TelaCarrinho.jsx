import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import CartItem from "./CartItem";

const TelaCarrinho = ({ carrinho }) => {
  const total = carrinho.reduce(
    (sum, item) => sum + item.preco * item.quantidade,
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  total: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TelaCarrinho;
