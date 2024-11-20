import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AcademicInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text>Graduação: Ciência da Computação - USP</Text>
      <Text>Pós-Graduação: MBA em Gestão de Projetos - FGV</Text>
      <Text>Cursos: React, React Native, UX Design</Text>
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
