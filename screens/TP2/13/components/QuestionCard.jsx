import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function QuestionCard({ question, onAnswer }) {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => onAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  optionButton: {
    padding: 12,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    marginVertical: 8,
  },
  optionText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
