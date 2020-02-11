import * as React from "react";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

import Home from "./views/Home";
import Detail from "./views/Detail";
export default function App() {
  useEffect(() => {
    Font.loadAsync({
      "VarelaRound-Regular": require("./assets/fonts/VarelaRound-Regular.ttf")
    });
  }, []);

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Details" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
