import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [inputCity, setInputCity] = useState("");

  const handleSearchSubmit = _ => {
    axios({
      method: "GET",
      url:
        "http://api.weatherstack.com/forecast?access_key=f45cdcbdb526f2b62d669baa8e566f7b&query=" +
        inputCity
    })
      .then(({ data }) => {
        setWeatherData(data);
      })
      .catch(console.log);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={{ fontSize: 35 }}>WeatherWorks</Text>
      </View>
      <Text
        style={{
          color: "lightgrey",
          alignSelf: "center",
          marginTop: 25,
          marginBottom: 5
        }}
      >
        Find your city...
      </Text>
      <View style={styles.inputSearch}>
        <TextInput
          style={{
            width: "70%",
            height: 40,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => setInputCity(text)}
          value={inputCity}
        />
        <TouchableOpacity
          onPress={handleSearchSubmit}
          style={{ width: "30%", marginLeft: 10 }}
        >
          <Text style={{ fontSize: 20, color: "black" }}>Enter</Text>
        </TouchableOpacity>
      </View>
      {weatherData.hasOwnProperty("request") && (
        <View style={styles.weatherDetail}>
          <Text>Latest Forecast for {weatherData.request.query}</Text>
          <View>
            <Text>
              &bull;&nbsp;Temperature: {weatherData.current.temperature}
            </Text>
            <Text>
              &bull;&nbsp;Description:{" "}
              {weatherData.current.weather_descriptions[0]}
            </Text>
            <Text>
              &bull;&nbsp;Wind Speed: {weatherData.current.wind_speed}
            </Text>
            <Text>
              &bull;&nbsp;Wind Degree: {weatherData.current.wind_degree}
            </Text>
            <Text>&bull;&nbsp;Pressure: {weatherData.current.pressure}</Text>
            <Text>&bull;&nbsp;Humidity: {weatherData.current.humidity}</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Constants.statusBarHeight,
    color: "red",
    alignItems: "center"
  },
  inputSearch: {
    flexDirection: "row",
    width: 350,
    alignSelf: "center"
  },
  weatherDetail: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center"
    marginTop: 40,
    width: 350,
    alignSelf: "center"
  }
});
