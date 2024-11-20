import React from "react";
import { View, Text, StyleSheet } from "react-native";

const User = ({ user }) => (
  <View style={styles.userContainer}>
    <Text>{user.name}</Text>
    <Text>Afinidade: {user.affinityScore.toFixed(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  userContainer: {
    marginBottom: 15,
  },
});

export default User;
