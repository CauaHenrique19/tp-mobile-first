import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Languages() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idiomas</Text>
      <View style={styles.item}>
        <Text style={styles.language}>Português</Text>
        <Text style={styles.level}>Nativo</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.language}>Inglês</Text>
        <Text style={styles.level}>Avançado (C1)</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.language}>Espanhol</Text>
        <Text style={styles.level}>Intermediário (B1)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    marginBottom: 15,
  },
  language: {
    fontSize: 18,
    fontWeight: "bold",
  },
  level: {
    fontSize: 16,
    color: "#555",
  },
});
