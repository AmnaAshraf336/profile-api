import React from "react";
import { SafeAreaView } from "react-native";
//import ProfileScreen from "../screens/ProfileScreen1";
//import SettingScreen from "../screens/SettingScreen";
 import LoginScreen from "../screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Switch between the screens below for testing */}
      {/* <LoginScreen /> */}

      {<LoginScreen />}
    </SafeAreaView>
  );
}
