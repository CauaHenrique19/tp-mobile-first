import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

const TaskList = ({ category, onBack, onAddTask, onRemoveTask }) => (
  <View style={styles.listContainer}>
    <TouchableOpacity onPress={onBack} style={styles.backButton}>
      <Text style={styles.backButtonText}>Voltar</Text>
    </TouchableOpacity>
    <Text style={styles.header}>{category.name}</Text>
    <FlatList
      data={category.tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onRemoveTask={() => onRemoveTask(category.id, item.id)}
        />
      )}
    />
    <TaskInput onAddTask={(taskName) => onAddTask(category.id, taskName)} />
  </View>
);

const styles = StyleSheet.create({
  listContainer: { flex: 1 },
  backButton: { marginBottom: 16 },
  backButtonText: { color: "#007bff", fontSize: 18 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});

export default TaskList;
