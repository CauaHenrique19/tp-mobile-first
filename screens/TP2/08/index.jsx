import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ContactItem from "./ContactItem";

const contacts = [
  {
    id: "1",
    avatar: "https://via.placeholder.com/100",
    name: "Alice Silva",
    address: "Rua das Flores, 123",
    phone: "(11) 98765-4321",
  },
  {
    id: "2",
    avatar: "https://via.placeholder.com/100",
    name: "Carlos Souza",
    address: "Av. Paulista, 456",
    phone: "(11) 91234-5678",
  },
  {
    id: "3",
    avatar: "https://via.placeholder.com/100",
    name: "Mariana Oliveira",
    address: "Rua Ametista, 789",
    phone: "(11) 99876-5432",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            avatar={item.avatar}
            name={item.name}
            address={item.address}
            phone={item.phone}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
});
