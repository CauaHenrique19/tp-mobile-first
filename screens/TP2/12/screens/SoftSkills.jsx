import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SoftSkills() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soft Skills</Text>
      <Text style={styles.skill}>- Comunicação eficaz</Text>
      <Text style={styles.skill}>- Trabalho em equipe</Text>
      <Text style={styles.skill}>- Resolução de problemas</Text>
      <Text style={styles.skill}>- Gerenciamento de tempo</Text>
      <Text style={styles.skill}>- Adaptabilidade</Text>
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
  skill: {
    fontSize: 16,
    marginVertical: 5,
  },
});
