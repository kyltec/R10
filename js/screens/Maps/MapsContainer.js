import React, { Component } from "react";
import Maps from "./Maps";

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
    return <Maps />;
  }
}
