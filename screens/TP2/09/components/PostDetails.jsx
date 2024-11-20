import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PostDetails({ route }) {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.meta}>
        <Text style={styles.metaText}>❤️ {post.likes} curtidas</Text>
        <Text style={styles.metaText}>🔄 {post.shares} compartilhamentos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  meta: {
    marginTop: 10,
  },
  metaText: {
    fontSize: 14,
    color: "#888",
  },
});
