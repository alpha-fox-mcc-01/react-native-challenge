import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import Constants from "expo-constants";
import * as Font from "expo-font";
import useFetcher from "../hooks/useFetcher";

export default function Home({ route, navigation }) {
  const [inputCity, setInputCity] = useState("");
  // const { weatherData, getCurrentWeather } = useFetcher();

  const handleSearchSubmit = _ => {
    getCurrentWeather(inputCity);
  };
  const { weatherData } = route.params;

  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Ini Detail</Text>
        <Text>{JSON.stringify(weatherData)}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
