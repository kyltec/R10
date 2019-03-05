import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default class MapContainer extends Component {
  static navigationOptions = {
    title: "Maps",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 20,
      color: "#fff"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text styles={styles.placeholder}>There is no map available</Text>
      </View>
    );
  }
}
