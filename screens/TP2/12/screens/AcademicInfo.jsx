import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AcademicInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      <View style={styles.item}>
        <Text style={styles.course}>Bacharelado em Ciência da Computação</Text>
        <Text style={styles.institution}>Universidade X - 2015 a 2019</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.course}>
          Pós-graduação em Desenvolvimento de Software
        </Text>
        <Text style={styles.institution}>Instituto Y - 2020 a 2021</Text>
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
  course: {
    fontSize: 18,
    fontWeight: "bold",
  },
  institution: {
    fontSize: 16,
    color: "#555",
  },
});
