import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PersonalInfo from "../screens/PersonalInfo";
import AcademicInfo from "../screens/AcademicInfo";
import ExperienceInfo from "../screens/ExperienceInfo";
import SkillsInfo from "../screens/SkillsInfo";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Pessoais" component={PersonalInfo} />
      <Tab.Screen name="Acadêmicas" component={AcademicInfo} />
      <Tab.Screen name="Experiências" component={ExperienceInfo} />
      <Tab.Screen name="Idiomas e Soft Skills" component={SkillsInfo} />
    </Tab.Navigator>
  );
}
