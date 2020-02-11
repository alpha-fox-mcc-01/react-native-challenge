import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import useFetcher from "../useFetcher";
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
            <View>
            <View style={{ borderRadius: 6 }}>
              <View style={styles.imgcontainer}>
                <Image
                  style={styles.img}
                  source={{ uri: image }}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.nameBox}>
                <Text style={styles.charName}>{name}</Text>
                <Text style={{ color: "white" }}>Species: {species}</Text>
              </View>
            </View>
            <View style={styles.descContainer}>
              <View style={styles.textBox}>
                <Text
                  style={{ marginLeft: 4, fontSize: 16, color: "rgb(158, 158, 158)" }}
                >
                  STATUS
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    width: "80%",
                    fontSize: 16,
                    color: "rgb(255, 152, 0)"
                  }}
                >
                  {status}
                </Text>
              </View>
              <View style={styles.textBox}>
                <Text
                  style={{ marginLeft: 4, fontSize: 16, color: "rgb(158, 158, 158)" }}
                >
                  GENDER
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    width: "80%",
                    fontSize: 16,
                    color: "rgb(255, 152, 0)"
                  }}
                >
                  {gender}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', padding: 5}}>
                <Text
                  style={{ marginLeft: 4, fontSize: 16, color: "rgb(158, 158, 158)" }}
                >
                  EPISODES
                </Text>
              </View>
            </View>
          </View>
          )
      }}
      data={episodes}
      renderItem={({ item }) => (
        <View style={styles.episodeBox}>
          <Text style={{ color: "rgb(158, 158, 158)"}}> {item.name}</Text>
          <Text style={{ color: "black" }}> {item.episode}</Text>
          <Text style={{ color: "black"}}> {item.air_date}</Text>
        </View>
      )}
      keyExtractor={item => item.name.toString()}
    />
    </>
  );
}

const styles = {
  img: {
    width: 420,
    height: 400
  },
  imgcontainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  charName: {
    fontSize: 30,
    color: "white"
  },
  descContainer: {
    backgroundColor: "#333333",
    justifyContent: "center",
    padding: 15
  },
  episodeBox: {
    backgroundColor: "#333333",
    alignItems: "center"
  },
  nameBox: {
    position: "absolute",
    backgroundColor: "#202329",
    width: "100%",
    opacity: 0.8,
    bottom: 0,
    padding: 15
  },
  textBox: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgb(68, 68, 68)",
    padding: 5
  }
};
