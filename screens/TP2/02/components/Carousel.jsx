import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CarouselItem from "./CarouselItem";

const data = [
  { id: "1", title: "Item 1", color: "#FF6F61" },
  { id: "2", title: "Item 2", color: "#6B5B95" },
  { id: "3", title: "Item 3", color: "#88B04B" },
  { id: "4", title: "Item 4", color: "#F7CAC9" },
];

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CarouselItem title={item.title} color={item.color} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    paddingVertical: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default Carousel;
