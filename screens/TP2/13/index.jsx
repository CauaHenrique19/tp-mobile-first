// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Quiz"
          component={QuestionScreen}
          options={{ title: "Quiz" }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: "Resultado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
