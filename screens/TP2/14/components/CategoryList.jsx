import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CategoryList = ({ categories, onSelectCategory }) => (
  <View style={styles.listContainer}>
    <Text style={styles.header}>Categorias</Text>
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => onSelectCategory(item)}
        >
          <Text style={styles.listItemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  listContainer: { flex: 1 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  listItem: {
    padding: 16,
    backgroundColor: "#ddd",
    marginVertical: 8,
    borderRadius: 8,
  },
  listItemText: { fontSize: 18 },
});

export default CategoryList;
