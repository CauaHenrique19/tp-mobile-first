import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import QuestionCard from "./QuestionCard";

const questions = [
  {
    question: "Qual é a capital da França?",
    options: ["Paris", "Londres", "Berlim", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Quanto é 5 + 7?",
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"],
    answer: "Da Vinci",
  },
  // Adicione mais perguntas...
];

export default function QuestionScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate("Result", { score, total: questions.length });
    }
  };

  return (
    <View style={styles.container}>
      <QuestionCard
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
