import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image
} from "react-native";
import Constants from "expo-constants";
import * as Font from "expo-font";
import useFetcher from "../hooks/useFetcher";

export default function Home({ navigation }) {
  const [inputCity, setInputCity] = useState("");
  const { weatherData, getCurrentWeather } = useFetcher();

  useEffect(() => {
    Font.loadAsync({
      "VarelaRound-Regular": require("../assets/fonts/VarelaRound-Regular.ttf")
    });
  }, []);

  const handleSearchSubmit = _ => {
    getCurrentWeather(inputCity);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>WeatherWorks</Text>
      </View>
      <Text
        style={{
          color: "lightgrey",
          alignSelf: "center",
          marginTop: 10,
          marginBottom: 5
        }}
      >
        Find your city...
      </Text>
      <View style={styles.inputSearch}>
        <TextInput
          style={{
            width: "70%",
            height: 37,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => setInputCity(text)}
          value={inputCity}
        />
        <Button
          title="Enter"
          onPress={handleSearchSubmit}
          // style={{ width: "30%", marginLeft: 10, backgroundColor: "lightgrey" }}
        >
          {/* <Text style={{ fontSize: 20, color: "black" }}>Enter</Text> */}
        </Button>
      </View>
      {weatherData.hasOwnProperty("request") && (
        <View style={styles.weatherDetailContainer}>
          <View style={styles.mainInfo}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: weatherData.current.weather_icons[0] }}
            />
            <Text style={styles.weatherTemperature}>
              {weatherData.current.temperature}&#8451;
            </Text>
            <Text style={styles.weatherPlace}>{weatherData.request.query}</Text>
            <Text style={styles.weatherDescription}>
              {weatherData.current.weather_descriptions[0]}
            </Text>
          </View>

          <View style={styles.additionalInfo}>
            <Text style={styles.additionalInfoHeader}>Additional Info</Text>
            <View style={styles.additionalInfoContent}>
              <View style={styles.additionalInfoText}>
                <Text style={styles.additionalInfoName}>Wind</Text>
                <Text style={styles.additionalInfoStats}>
                  {weatherData.current.wind_speed} m/h
                </Text>
              </View>
              <View style={styles.additionalInfoText}>
                <Text style={styles.additionalInfoName}>Humidity </Text>
                <Text style={styles.additionalInfoStats}>
                  {weatherData.current.humidity} %
                </Text>
              </View>
            </View>
            <View style={styles.additionalInfoContent}>
              <View style={styles.additionalInfoText}>
                <Text style={styles.additionalInfoName}>Visibility </Text>
                <Text style={styles.additionalInfoStats}>
                  {weatherData.current.visibility} km
                </Text>
              </View>
              <View style={styles.additionalInfoText}>
                <Text style={styles.additionalInfoName}>UV</Text>
                <Text style={styles.additionalInfoStats}>
                  {weatherData.current.uv_index}
                </Text>
              </View>
            </View>
          </View>
          <Button
            title="View History and Forecasts..."
            onPress={() => navigation.push("Details", { weatherData })}
          />
          {/* <TouchableOpacity
                onPress={handleSearchSubmit}
                style={{ width: "30%", marginLeft: 10 }}
              >
                <Text style={{ fontSize: 20, color: "black" }}>Enter</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    // marginTop: Constants.statusBarHeight,
    color: "red",
    alignItems: "center"
  },
  inputSearch: {
    flexDirection: "row",
    width: 300,
    alignSelf: "center"
  },
  weatherDetailContainer: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
    marginTop: 20,
    width: 350,
    alignSelf: "center"
  },
  weatherDetailText: {
    fontFamily: "VarelaRound-Regular"
  },
  title: {
    fontFamily: "VarelaRound-Regular",
    fontSize: 20
  },
  mainInfo: {
    alignItems: "center",
    marginTop: 30
  },
  weatherTemperature: {
    fontFamily: "VarelaRound-Regular",
    fontSize: 60
  },
  weatherPlace: {
    fontFamily: "VarelaRound-Regular",
    color: "grey"
  },
  weatherDescription: {
    fontSize: 20,
    fontFamily: "VarelaRound-Regular"
  },
  additionalInfo: {
    marginTop: 60
  },
  additionalInfoHeader: {
    fontFamily: "VarelaRound-Regular",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20
  },
  additionalInfoContent: {
    flexDirection: "row",
    marginBottom: 20
  },
  additionalInfoText: {
    width: "50%",
    fontFamily: "VarelaRound-Regular",
    flexDirection: "row"
  },
  additionalInfoStats: {
    width: "50%",
    fontFamily: "VarelaRound-Regular",
    color: "grey"
  },
  additionalInfoName: {
    width: "50%",
    fontFamily: "VarelaRound-Regular"
  }
});
