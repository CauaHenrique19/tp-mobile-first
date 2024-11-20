import React from "react";
import { View, Text, Button } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Settings</Text>
      <Button title="Change Profile" onPress={() => {}} />
      <Button title="Change Password" onPress={() => {}} />
    </View>
  );
};

export default SettingsScreen;
