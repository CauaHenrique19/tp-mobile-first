import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TaskItem = ({ task, onRemoveTask }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskText}>{task.name}</Text>
    <TouchableOpacity onPress={onRemoveTask}>
      <Text style={styles.deleteButton}>Remover</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  taskText: { fontSize: 16 },
  deleteButton: { color: "#ff4d4d", fontSize: 14 },
});

export default TaskItem;
