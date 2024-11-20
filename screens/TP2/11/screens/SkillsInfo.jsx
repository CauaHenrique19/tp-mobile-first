import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SkillsInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idiomas e Soft Skills</Text>
      <Text>
        Idiomas: Português (Nativo), Inglês (Fluente), Espanhol (Intermediário)
      </Text>
      <Text>Soft Skills: Comunicação, Liderança, Trabalho em equipe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
