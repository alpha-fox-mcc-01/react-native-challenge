import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground
} from "react-native";
import Constants from "expo-constants";
import * as Font from "expo-font";
import useFetcher from "../hooks/useFetcher";

export default function Home({ route, navigation }) {
  const [images, setImages] = useState([
    "https://i.pinimg.com/originals/78/0f/bc/780fbc72e6743e764b50baa5801c028c.gif",
    "https://i.pinimg.com/originals/9b/10/cc/9b10cc2b071c4d26ced93c49cf9f9222.jpg",
    "https://images.wallpapersden.com/image/download/forest-minimal_57638_1400x1050.jpg"
  ]);
  const [inputCity, setInputCity] = useState("");
  const [fontVarelaRound, setFontVarelaRound] = useState({
    fontFamily: "sans-serif"
  });
  async function loadFont() {
    await Font.loadAsync({
      "VarelaRound-Regular": require("../assets/fonts/VarelaRound-Regular.ttf")
    });
    setFontVarelaRound({ fontFamily: "VarelaRound-Regular" });
  }
  useEffect(() => {
    loadFont();
  }, []);

  const handleSearchSubmit = _ => {
    getCurrentWeather(inputCity);
  };
  const { weatherData } = route.params;

  return (
    <ImageBackground
      source={{
        uri: images[Math.floor(Math.random() * 3)]
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ padding: 25 }}>
        <Text
          style={{
            fontSize: 33,
            ...fontVarelaRound
            // marginTop: Constants.statusBarHeight
          }}
        >
          {weatherData.location.name}
        </Text>
        <Text
          style={{
            fontSize: 23,
            marginLeft: 2,
            color: "grey",
            ...fontVarelaRound
            // marginTop: Constants.statusBarHeight
          }}
        >
          {weatherData.location.country}
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 2,
            color: "blue",
            opacity: 0.6,
            ...fontVarelaRound
            // marginTop: Constants.statusBarHeight
          }}
        >
          Region: {weatherData.location.region}
        </Text>
        <View style={styles.geographicInfo}>
          <Text style={{ ...fontVarelaRound, fontSize: 20, width: "70%" }}>
            {Object.keys(weatherData.forecast)[0]}
          </Text>
          <Text style={{ ...fontVarelaRound, fontSize: 20, width: "15%" }}>
            {weatherData.forecast[Object.keys(weatherData.forecast)[0]].maxtemp}
            &#8451;&nbsp;
          </Text>
          <Text
            style={{
              ...fontVarelaRound,
              fontSize: 20,
              marginLeft: 5,
              width: "15%",
              color: "grey"
            }}
          >
            {weatherData.forecast[Object.keys(weatherData.forecast)[0]].mintemp}
            &#8451;&nbsp;
          </Text>
        </View>
        <View style={styles.additionalInfo}>
          <View style={styles.additionalInfoContent}>
            <View style={styles.additionalInfoText}>
              <Text
                style={{ ...styles.additionalInfoName, ...fontVarelaRound }}
              >
                Wind
              </Text>
              <Text
                style={{ ...styles.additionalInfoStats, ...fontVarelaRound }}
              >
                {weatherData.current.wind_speed} m/h
              </Text>
            </View>
            <View style={styles.additionalInfoText}>
              <Text
                style={{ ...styles.additionalInfoName, ...fontVarelaRound }}
              >
                Humidity{" "}
              </Text>
              <Text
                style={{ ...styles.additionalInfoStats, ...fontVarelaRound }}
              >
                {weatherData.current.humidity} %
              </Text>
            </View>
          </View>
          <View style={styles.additionalInfoContent}>
            <View style={styles.additionalInfoText}>
              <Text
                style={{ ...styles.additionalInfoName, ...fontVarelaRound }}
              >
                Visibility{" "}
              </Text>
              <Text
                style={{ ...styles.additionalInfoStats, ...fontVarelaRound }}
              >
                {weatherData.current.visibility} km
              </Text>
            </View>
            <View style={styles.additionalInfoText}>
              <Text
                style={{ ...styles.additionalInfoName, ...fontVarelaRound }}
              >
                UV
              </Text>
              <Text
                style={{ ...styles.additionalInfoStats, ...fontVarelaRound }}
              >
                {weatherData.current.uv_index}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ ...fontVarelaRound, ...styles.forecastStats }}>
          <View style={{ ...fontVarelaRound, ...styles.forecastStatsView }}>
            <Text
              style={{
                ...fontVarelaRound,
                ...styles.forecastStatsText,
                color: "white"
              }}
            >
              Average Temperature:
            </Text>
            <Text
              style={{
                ...fontVarelaRound,
                fontSize: 20,
                width: "20%",
                color: "white"
              }}
            >
              {
                weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                  .avgtemp
              }
              &#8451;
            </Text>
          </View>
          <View style={{ ...fontVarelaRound, ...styles.forecastStatsView }}>
            <Text
              style={{
                ...fontVarelaRound,
                ...styles.forecastStatsText,
                color: "white"
              }}
            >
              Sunhour:
            </Text>
            <Text
              style={{
                ...fontVarelaRound,
                fontSize: 20,
                width: "20%",
                color: "white"
              }}
            >
              {
                weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                  .sunhour
              }{" "}
              h
            </Text>
          </View>
          <View style={{ ...fontVarelaRound, ...styles.forecastStatsView }}>
            <Text
              style={{
                ...fontVarelaRound,
                ...styles.forecastStatsText,
                color: "white"
              }}
            >
              Moon Illumination:
            </Text>
            <Text
              style={{
                ...fontVarelaRound,
                fontSize: 20,
                width: "20%",
                color: "white"
              }}
            >
              {
                weatherData.forecast[Object.keys(weatherData.forecast)[0]].astro
                  .moon_illumination
              }{" "}
              lux
            </Text>
          </View>
          <View style={{ ...fontVarelaRound, ...styles.forecastStatsView }}>
            <Text
              style={{
                ...fontVarelaRound,
                ...styles.forecastStatsText,
                color: "white"
              }}
            >
              Snow Index:
            </Text>
            <Text
              style={{
                ...fontVarelaRound,
                fontSize: 20,
                width: "20%",
                color: "white"
              }}
            >
              {
                weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                  .totalsnow
              }{" "}
              cm
            </Text>
          </View>
        </View>
        <View style={styles.weatherPhasesContainer}>
          <View style={styles.weatherPhase}>
            <Image
              source={require("../assets/sunrise-icon.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ ...fontVarelaRound, color: "grey" }}>
              {" "}
              {
                weatherData.forecast[Object.keys(weatherData.forecast)[0]].astro
                  .sunrise
              }
            </Text>
          </View>
          <View style={styles.weatherPhase}>
            <Image
              source={require("../assets/sunset-icon.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ ...fontVarelaRound, color: "grey" }}>
              {" "}
              {
                weatherData.forecast[Object.keys(weatherData.forecast)[0]].astro
                  .sunset
              }
            </Text>
          </View>
          <View style={styles.weatherPhase}>
            <Image
              source={require("../assets/moonrise-icon.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ ...fontVarelaRound, color: "grey" }}>
              {" "}
              {
                weatherData.forecast[Object.keys(weatherData.forecast)[0]].astro
                  .moonrise
              }
            </Text>
          </View>
          <View style={styles.weatherPhase}>
            <Image
              source={require("../assets/moonset-icon.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ ...fontVarelaRound, color: "grey" }}>
              {" "}
              {
                weatherData.forecast[Object.keys(weatherData.forecast)[0]].astro
                  .moonset
              }
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  geographicInfo: {
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 20
  },
  additionalInfoContent: {
    flexDirection: "row",
    marginBottom: 14
  },
  additionalInfoText: {
    width: "50%",
    flexDirection: "row"
  },
  additionalInfoStats: {
    width: "50%",
    color: "grey"
  },
  additionalInfoName: {
    width: "50%"
  },
  forecastStats: {
    marginTop: 10
  },
  forecastStatsView: {
    flexDirection: "row",
    marginTop: 35
  },
  forecastStatsText: {
    fontSize: 20,
    width: "80%"
  },
  weatherPhasesContainer: {
    marginTop: 30,
    flexDirection: "row"
  },
  weatherPhase: {
    width: "25%",
    alignItems: "center"
  }
});
