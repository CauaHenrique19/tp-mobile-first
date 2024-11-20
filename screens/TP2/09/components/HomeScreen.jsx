import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import PostItem from "./PostItem";

const posts = [
  {
    id: "1",
    title: "Postagem 1",
    summary: "Resumo da postagem 1",
    likes: 12,
    shares: 5,
    content: "Conteúdo detalhado da postagem 1",
  },
  {
    id: "2",
    title: "Postagem 2",
    summary: "Resumo da postagem 2",
    likes: 8,
    shares: 2,
    content: "Conteúdo detalhado da postagem 2",
  },
  {
    id: "3",
    title: "Postagem 3",
    summary: "Resumo da postagem 3",
    likes: 15,
    shares: 7,
    content: "Conteúdo detalhado da postagem 3",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem
            post={item}
            onPress={() => navigation.navigate("Details", { post: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
