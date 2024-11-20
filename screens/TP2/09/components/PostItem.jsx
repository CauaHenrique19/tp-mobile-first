import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PostItem({ post, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.summary}>{post.summary}</Text>
      <View style={styles.meta}>
        <Text style={styles.metaText}>❤️ {post.likes}</Text>
        <Text style={styles.metaText}>🔄 {post.shares}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  summary: {
    fontSize: 14,
    color: "#555",
    marginVertical: 8,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metaText: {
    fontSize: 12,
    color: "#888",
  },
});
