import React from "react";
import { StyleSheet, View } from "react-native";
import Grid from "./components/Grid";

const App = () => {
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
  }));

  return (
    <View style={styles.container}>
      <Grid items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
});

export default App;
