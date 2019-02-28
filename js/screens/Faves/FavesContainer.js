import React, { Component } from "react";
import { View, Text } from "react-native";
import FavesContext from "../../context/";
import Faves from "./Faves";

export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Faves",
    headerTintcolor: "#fff",
    headerTitleStyle: {
      fontSize: 20,
      color: "#fff"
    }
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds, setFaveId, deleteFaveId }) => {
          return <Faves setFaveId={setFaveId} deleteFaveId={deleteFaveId} />;
        }}
      </FavesContext.Consumer>
    );
  }
}
