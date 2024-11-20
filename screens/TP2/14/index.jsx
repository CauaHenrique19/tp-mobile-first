import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CategoryList from "./CategoryList";
import TaskList from "./TaskList";

const App = () => {
  const [categories, setCategories] = useState([
    { id: "1", name: "Mercado", tasks: [] },
    { id: "2", name: "Farmácia", tasks: [] },
    { id: "3", name: "Estudos", tasks: [] },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addTask = (categoryId, taskName) => {
    setCategories((prevCategories) =>
      prevCategories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              tasks: [
                ...cat.tasks,
                { id: Date.now().toString(), name: taskName },
              ],
            }
          : cat
      )
    );
  };

  const removeTask = (categoryId, taskId) => {
    setCategories((prevCategories) =>
      prevCategories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, tasks: cat.tasks.filter((task) => task.id !== taskId) }
          : cat
      )
    );
  };

  return (
    <View style={styles.container}>
      {selectedCategory ? (
        <TaskList
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
          onAddTask={addTask}
          onRemoveTask={removeTask}
        />
      ) : (
        <CategoryList
          categories={categories}
          onSelectCategory={setSelectedCategory}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f4f4f4" },
});

export default App;
