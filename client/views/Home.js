import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ImageBackground,
  Image,
  Keyboard
} from "react-native";
import Constants from "expo-constants";
import * as Font from "expo-font";
import useFetcher from "../hooks/useFetcher";

export default function Home({ navigation }) {
  const [inputCity, setInputCity] = useState("");
  const { weatherData, getCurrentWeather } = useFetcher();
  const [fontLoaded, setFontLoaded] = useState(false);
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

  return (
    <>
      <View style={styles.header}>
        <Text style={{ ...styles.title, ...fontVarelaRound }}>
          {/* W E A T H E R &nbsp;S T A S T I S T I C S */}
          Weather Statistics
        </Text>
      </View>
      <Text
        style={{
          color: "grey",
          alignSelf: "center",
          marginTop: 10,
          marginBottom: 5,
          ...fontVarelaRound
        }}
      >
        Find your city...
      </Text>
      <View style={styles.inputSearch}>
        <TextInput
          style={{
            width: "70%",
            height: 30,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            ...fontVarelaRound
          }}
          onChangeText={text => setInputCity(text)}
          value={inputCity}
        />
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            handleSearchSubmit();
          }}
          style={{
            width: "25%",
            // backgroundColor: "lightgrey",
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 5,
            height: 31
            // width: 330
          }}
        >
          <Text
            style={{
              marginTop: 3,
              fontSize: 15,
              color: "black",
              textAlign: "center",
              ...fontVarelaRound
            }}
          >
            Enter
          </Text>
        </TouchableOpacity>
      </View>
      {weatherData.hasOwnProperty("request") && (
        <View style={styles.weatherDetailContainer}>
          <View style={styles.mainInfo}>
            <Image
              style={{ width: 40, height: 40, marginBottom: 10 }}
              source={{ uri: weatherData.current.weather_icons[0] }}
            />
            <Text style={{ ...styles.weatherTemperature, ...fontVarelaRound }}>
              {weatherData.current.temperature}&#8451;
            </Text>
            <Text style={{ ...styles.weatherPlace, ...fontVarelaRound }}>
              {weatherData.request.query} -{" "}
              {weatherData.current.observation_time}
            </Text>
            <Text style={{ ...styles.weatherDescription, ...fontVarelaRound }}>
              {weatherData.current.weather_descriptions[0]}
            </Text>
          </View>
          <View style={styles.dayNames}>
            <Text
              style={{
                color: "lightgrey",
                ...fontVarelaRound
              }}
            >
              Sunrise
            </Text>
            <Text
              style={{
                color: "lightgrey",
                ...fontVarelaRound
              }}
            >
              Sunset
            </Text>
            <Text
              style={{
                color: "lightgrey",
                ...fontVarelaRound
              }}
            >
              Moonrise
            </Text>
          </View>
          <View style={styles.cardsContainer}>
            <Image
              source={{ uri: "https://wallpaperaccess.com/full/1092716.png" }}
              style={{
                width: 102,
                height: 160,
                borderRadius: 20,
                position: "absolute",
                zIndex: -1
                // borderWidth: 1
              }}
            />
            <View style={{ ...styles.timeCard }}>
              <Text
                style={{
                  color: "lightgrey",
                  ...fontVarelaRound
                }}
              >
                {
                  weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                    .astro.sunrise
                }
              </Text>
              <Image
                style={{ width: 64, height: 64 }}
                source={require("../assets/sunrise-icon.png")}
              />
              <Text
                style={{ ...styles.timeframeTemperatures, ...fontVarelaRound }}
              >
                {
                  weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                    .avgtemp
                }
                &#8451;
              </Text>
            </View>
            <Image
              source={require("../assets/purple-gradient.jpg")}
              style={{
                width: 102,
                height: 160,
                borderRadius: 20,
                position: "absolute",
                zIndex: -1,
                left: 120
                // borderWidth: 1
              }}
            />
            <View style={{ ...styles.timeCard }}>
              <Text
                style={{
                  color: "lightgrey",
                  ...fontVarelaRound
                }}
              >
                {
                  weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                    .astro.sunset
                }
              </Text>
              <Image
                style={{ width: 64, height: 64 }}
                source={require("../assets/sunset-icon.png")}
              />
              <Text
                style={{ ...styles.timeframeTemperatures, ...fontVarelaRound }}
              >
                {
                  weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                    .maxtemp
                }
                &#8451;
              </Text>
            </View>

            <Image
              source={{
                uri:
                  "https://themeccagym.com/wp-content/uploads/2019/09/black-gradient-background.png"
              }}
              style={{
                width: 102,
                height: 160,
                borderRadius: 20,
                position: "absolute",
                zIndex: -1,
                left: 240
                // borderWidth: 1
              }}
            />
            <View style={{ ...styles.timeCard }}>
              <Text
                style={{
                  color: "lightgrey",
                  ...fontVarelaRound
                }}
              >
                {
                  weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                    .astro.moonrise
                }
              </Text>
              <Image
                style={{ width: 64, height: 64 }}
                source={require("../assets/moonrise-icon.png")}
              />
              <Text
                style={{ ...styles.timeframeTemperatures, ...fontVarelaRound }}
              >
                {
                  weatherData.forecast[Object.keys(weatherData.forecast)[0]]
                    .mintemp
                }
                &#8451;
              </Text>
            </View>
            {/* </ImageBackground> */}
          </View>

          <View style={styles.additionalInfo}>
            <Text
              style={{ ...styles.additionalInfoHeader, ...fontVarelaRound }}
            >
              Additional Info
            </Text>
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
          <TouchableOpacity
            onPress={() => navigation.push("Details", { weatherData })}
            style={{
              width: "100%",
              // backgroundColor: "lightgrey",
              padding: 3,
              borderRadius: 10,
              borderColor: "black",
              borderWidth: 1,
              marginTop: 10
              // width: 330
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                textAlign: "center",
                ...fontVarelaRound
              }}
            >
              V I E W &nbsp;F O R E C A S T
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
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
  weatherDetailText: {},
  title: {
    fontSize: 17,
    color: "purple"
  },
  mainInfo: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8
  },
  weatherTemperature: {
    fontSize: 50
  },
  weatherPlace: {
    color: "grey"
  },
  weatherDescription: {
    fontSize: 20
    // width: "50%"
  },
  additionalInfo: {
    marginTop: 70
  },
  additionalInfoHeader: {
    fontSize: 20,
    fontWeight: "600",
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
  cardsContainer: {
    alignSelf: "center",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    width: 350,
    height: 120
  },
  dayNames: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    width: 215,
    justifyContent: "space-around",
    alignSelf: "center"
  },
  timeCard: {
    width: 102,
    height: 160,
    borderRadius: 20,
    padding: 15
  },
  timeframeTemperatures: {
    color: "grey"
  }
});
