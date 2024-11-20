import React, { useState } from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

const TaskInput = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim()) {
      onAddTask(taskName.trim());
      setTaskName("");
    }
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Nova tarefa"
      value={taskName}
      onChangeText={setTaskName}
      onSubmitEditing={handleAddTask}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default TaskInput;
