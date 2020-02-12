import React from "react";
import { View, Text } from "react-native";
export default function DetailInfo(props) {
  const { name, status, species, gender } = props.info;
  return (
    <>
      <View style={styles.nameBox}>
        <Text style={styles.charName}>{name}</Text>
        <Text style={{ color: "white" }}>Species: {species}</Text>
      </View>
      <View style={styles.descContainer}>
        <View style={styles.textBox}>
          <Text style={styles.field}>STATUS</Text>
          <Text style={styles.content}>{status}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.field}>GENDER</Text>
          <Text style={styles.content}>{gender}</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <Text style={styles.field}>EPISODES</Text>
        </View>
      </View>
    </>
  );
}

const styles = {
  descContainer: {
    backgroundColor: "#333333",
    justifyContent: "center",
    padding: 15
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
  },
  field: {
    marginLeft: 4,
    fontSize: 16,
    color: "rgb(158, 158, 158)"
  },
  content: {
    textAlign: "right",
    width: "80%",
    fontSize: 16,
    color: "rgb(255, 152, 0)"
  }
};
