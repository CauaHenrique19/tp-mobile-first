import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function PersonalInfo() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://example.com/your-photo.jpg" }}
        style={styles.photo}
      />
      <Text style={styles.name}>Seu Nome</Text>
      <Text style={styles.info}>Email: seu.email@example.com</Text>
      <Text style={styles.info}>Telefone: (XX) XXXX-XXXX</Text>
      <Text style={styles.description}>
        Breve resumo sobre você. Inclua informações relevantes sobre sua
        carreira e habilidades.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
  },
});
