import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import User from "./User";

const AffinityScreen = ({ route }) => {
  const { likedItems, dislikedItems } = route.params;

  const calculateAffinity = (otherUserLikedItems, otherUserDislikedItems) => {
    const commonLikes = likedItems.filter((item) =>
      otherUserLikedItems.includes(item)
    );
    const commonDislikes = dislikedItems.filter((item) =>
      otherUserDislikedItems.includes(item)
    );
    return (
      (commonLikes.length - commonDislikes.length) /
      Math.max(likedItems.length, dislikedItems.length)
    );
  };

  const users = [
    {
      id: 1,
      name: "User 1",
      likedItems: ["Movie 1", "Movie 3"],
      dislikedItems: ["Movie 4"],
    },
    {
      id: 2,
      name: "User 2",
      likedItems: ["Movie 2", "Movie 5"],
      dislikedItems: ["Movie 1"],
    },
    {
      id: 3,
      name: "User 3",
      likedItems: ["Movie 1", "Movie 2"],
      dislikedItems: ["Movie 4", "Movie 5"],
    },
  ];

  const usersWithAffinity = users.map((user) => {
    const affinityScore = calculateAffinity(
      user.likedItems,
      user.dislikedItems
    );
    return { ...user, affinityScore };
  });

  const sortedUsers = usersWithAffinity.sort(
    (a, b) => b.affinityScore - a.affinityScore
  );

  return (
    <View style={styles.container}>
      <Text>Users with similar taste:</Text>
      <FlatList
        data={sortedUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <User user={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default AffinityScreen;
