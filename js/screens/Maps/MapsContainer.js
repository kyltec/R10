import React, { Component } from "react";
import { View, Text } from "react-native";

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
      <View>
        <Text>Insert Map Here</Text>
      </View>
    );
  }
}
