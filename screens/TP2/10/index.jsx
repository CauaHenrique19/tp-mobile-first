import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaProdutos from "./components/TelaProdutos";
import TelaCarrinho from "./components/TelaCarrinho";

const Stack = createStackNavigator();

const App = () => {
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: "1", nome: "Produto A", preco: 10 },
    { id: "2", nome: "Produto B", preco: 15 },
    { id: "3", nome: "Produto C", preco: 20 },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const existe = prev.find((item) => item.id === produto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Produtos">
          {(props) => (
            <TelaProdutos
              {...props}
              produtos={produtos}
              onAddToCart={adicionarAoCarrinho}
              onViewCart={() => props.navigation.navigate("Carrinho")}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Carrinho">
          {(props) => <TelaCarrinho {...props} carrinho={carrinho} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
