import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ItemSelectionScreen from "./components/ItemSelectionScreen";
import AffinityScreen from "./components/AffinityScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ItemSelection">
        <Stack.Screen name="ItemSelection" component={ItemSelectionScreen} />
        <Stack.Screen name="Affinity" component={AffinityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
