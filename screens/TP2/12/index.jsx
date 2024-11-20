import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PersonalInfo from "./src/screens/PersonalInfo";
import AcademicInfo from "./src/screens/AcademicInfo";
import Experience from "./src/screens/Experience";
import Languages from "./src/screens/Languages";
import SoftSkills from "./src/screens/SoftSkills";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Personal Info">
        <Drawer.Screen name="Personal Info" component={PersonalInfo} />
        <Drawer.Screen name="Academic Info" component={AcademicInfo} />
        <Drawer.Screen name="Experience" component={Experience} />
        <Drawer.Screen name="Languages" component={Languages} />
        <Drawer.Screen name="Soft Skills" component={SoftSkills} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
