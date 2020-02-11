import React from "react";
import { Text, Image, View } from "react-native";

export default function DetailImage(props) {
  const { name, status, image, species, type, gender } = props.info;
  return (
    <View style={{ borderRadius: 6 }}>
      <View style={styles.imgcontainer}>
        <Image style={styles.img} source={{ uri: image }} resizeMode="cover" />
      </View>
      <View style={styles.nameBox}>
        <Text style={styles.charName}>{name}</Text>
        <Text style={{ color: "white" }}>Species: {species}</Text>
      </View>
    </View>
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
