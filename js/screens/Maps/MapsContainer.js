import React, { Component } from "react";
import { View, Text } from "react-native";

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
        <Text> </Text>
      </View>
    );
  }
}
