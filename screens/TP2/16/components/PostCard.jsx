import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.liked);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <View
      style={{
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <Text>{post.destination}</Text>
      <Text>{`${post.startDate} - ${post.endDate}`}</Text>
      <Text>Rating: {post.rating}</Text>
      <TouchableOpacity onPress={handleLike}>
        <Text style={{ color: liked ? "red" : "black" }}>
          {liked ? "Liked" : "Like"}
        </Text>
      </TouchableOpacity>
      <Button title="See Details" onPress={() => {}} />
    </View>
  );
};

export default PostCard;
