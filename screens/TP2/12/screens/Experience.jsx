import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Experience() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiências Profissionais</Text>
      <View style={styles.item}>
        <Text style={styles.jobTitle}>Desenvolvedor Frontend</Text>
        <Text style={styles.company}>Empresa ABC - 2021 até o momento</Text>
        <Text style={styles.description}>
          Desenvolvimento de aplicações web responsivas utilizando React.js e
          integração com APIs REST.
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.jobTitle}>Estagiário em Desenvolvimento</Text>
        <Text style={styles.company}>Empresa DEF - 2019 a 2020</Text>
        <Text style={styles.description}>
          Auxílio no desenvolvimento de funcionalidades para sistemas internos
          da empresa.
        </Text>
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
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  company: {
    fontSize: 16,
    color: "#555",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
});
