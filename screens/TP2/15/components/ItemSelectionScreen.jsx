import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Item from "./Item";

const items = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"];

const ItemSelectionScreen = ({ navigation }) => {
  const [likedItems, setLikedItems] = useState([]);
  const [dislikedItems, setDislikedItems] = useState([]);

  const handleLike = (item) => {
    setLikedItems([...likedItems, item]);
  };

  const handleDislike = (item) => {
    setDislikedItems([...dislikedItems, item]);
  };

  const goToAffinityScreen = () => {
    navigation.navigate("Affinity", { likedItems, dislikedItems });
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          onLike={() => handleLike(item)}
          onDislike={() => handleDislike(item)}
        />
      ))}
      <Button title="See Affinity" onPress={goToAffinityScreen} />
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

export default ItemSelectionScreen;
