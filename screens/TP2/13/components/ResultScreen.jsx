import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ResultScreen({ route, navigation }) {
  const { score, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado Final</Text>
      <Text style={styles.score}>
        Você acertou {score} de {total} questões!
      </Text>
      <Button
        title="Reiniciar Quiz"
        onPress={() => navigation.navigate("Quiz")}
      />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  score: {
    fontSize: 20,
    marginBottom: 24,
  },
});
