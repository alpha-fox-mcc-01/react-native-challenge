import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import useFetcher from "../useFetcher";
import DetailImage from "./components/DetailImage";
import DetailInfo from "./components/DetailInfo";

export default function DetailsPage({ route, navigation }) {
  const { name, status, image, species, type, gender } = route.params;

  const episodes = [
    {
      name: "Pilot",
      episode: "S1E01",
      air_date: "December 2, 2013"
    },
    {
      name: "Lawnmower Dog",
      episode: "S1E02",
      air_date: "December 9, 2013"
    },
    {
      name: "Anatomy Park",
      episode: "S1E03",
      air_date: "December 16, 2013"
    },
    {
      name: "M. Night Shaym-Aliens!",
      episode: "S1E04",
      air_date: "January 13, 2014"
    },
    {
      name: "Meeseeks and Destroy",
      episode: "S1E05",
      air_date: "January 20, 2014"
    }
  ];

  return (
    <>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              <DetailImage info={route.params}></DetailImage>
              <DetailInfo info={route.params}></DetailInfo>
            </>
          );
        }}
        data={episodes}
        renderItem={({ item }) => (
          <View style={styles.episodeBox}>
            <Text style={{ color: "rgb(158, 158, 158)" }}> {item.name}</Text>
            <Text style={{ color: "rgb(255, 152, 0)" }}> {item.episode}</Text>
            <Text style={{ color: "black" }}> {item.air_date}</Text>
          </View>
        )}
        keyExtractor={item => item.name.toString()}
      />
    </>
  );
}

const styles = {
  episodeBox: {
    backgroundColor: "#333333",
    alignItems: "center"
  }
};
