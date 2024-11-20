import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ExperienceInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text>Desenvolvedor Front-End na ABC Tech (2020 - atual)</Text>
      <Text>Analista de Sistemas na XYZ Corp (2016 - 2020)</Text>
      <Text>Estagiário de TI na DEF Solutions (2014 - 2016)</Text>
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
