import React from "react";
import { Text, View } from "react-native";

const PostDetail = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>{`Destination: ${post.destination}`}</Text>
      <Text>{`Start Date: ${post.startDate}`}</Text>
      <Text>{`End Date: ${post.endDate}`}</Text>
      <Text>{`Rating: ${post.rating}`}</Text>
    </View>
  );
};

export default PostDetail;
