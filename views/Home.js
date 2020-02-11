import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList
} from "react-native";
import useFetcher from "../useFetcher";
import Constants from "expo-constants";
import SearchBar from "./components/SearchBar";

export default function HomePage({ navigation }) {
  const { characters, loading, error } = useFetcher("/character");
  const [result, setResult] = useState([]);
  const [list, setList] = useState([]);

  const searchChar = keyword => {
    const searchResult = characters.filter(character => {
      return character.name.startsWith(`${keyword}`);
    });
    searchResult.length > 0 && setResult(searchResult);
  };

  useEffect(() => {
    if (result.length > 0) {
      setList(result);
    } else {
      setList(characters);
    }
  }, [result, characters]);

  if (error) return <Text>Error</Text>;
  if (loading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Rick and Morty Encyclopedia</Text>
      <View>
        <SearchBar searchChar={searchChar}></SearchBar>
      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <View style={styles.card}>
              <View>
                <Image
                  style={styles.image}
                  source={{ uri: item.image }}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.textMargin}>
                <Text style={{ color: "white" }}> {item.name}</Text>
                <Text style={{ color: "#FF9900" }}>
                  Origin: {item.origin.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202329",
    padding: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  header: {
    margin: Constants.statusBarHeight,
    color: "rgb(255, 152, 0)",
    fontWeight: "bold",
    fontSize: 20
  },
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "#d6d7da",
    borderRadius: 8,
    padding: 15,
    margin: 2,
    backgroundColor: "#4f4b4b"
  },
  textMargin: {
    marginLeft: 4
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
