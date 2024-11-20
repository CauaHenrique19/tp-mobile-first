import React from "react";
import { ScrollView, Text, View, Button } from "react-native";
import PostCard from "../components/Feed/PostCard";

const FeedScreen = () => {
  const posts = [
    {
      id: 1,
      destination: "Paris",
      startDate: "2024-01-10",
      endDate: "2024-01-15",
      rating: 4,
      liked: false,
    },
    {
      id: 2,
      destination: "Tokyo",
      startDate: "2024-02-01",
      endDate: "2024-02-10",
      rating: 5,
      liked: false,
    },
  ];

  return (
    <ScrollView>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default FeedScreen;
