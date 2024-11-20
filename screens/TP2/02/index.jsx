import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
