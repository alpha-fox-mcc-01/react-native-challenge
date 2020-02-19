import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

import Home from "./views/Home";
import Detail from "./views/Detail";

function HeaderTitle() {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFont() {
    await Font.loadAsync({
      "VarelaRound-Regular": require("./assets/fonts/VarelaRound-Regular.ttf")
    });
    setFontLoaded(true);
  }
  useEffect(() => {
    loadFont();
  }, []);
  return (
    fontLoaded && (
      <View style={{ marginLeft: 55 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "VarelaRound-Regular",
            width: "100%"
          }}
        >
          W E A T H E R W O R K S
        </Text>
      </View>
    )
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   title: "WeatherWorks",
          //   headerBackTitleStyle: {
          //     color: "red"
          //   }
          // }}
          options={{ headerTitle: props => <HeaderTitle {...props} /> }}
        />
        <Stack.Screen name="Forecast" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
