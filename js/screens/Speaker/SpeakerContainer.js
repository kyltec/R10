import React, { Component } from "react";

import Speaker from "./Speaker";

export default class SessionsContainer extends Component {
  static navigationOptions = {
    title: "Sessions",
    headerTintcolor: "#fff",
    headerTitleStyle: {
      fontSize: 20,
      color: "#fff"
    }
  };

  render() {
    let { navigation } = this.props;

    return (
      <Speaker
        navigation={navigation}
        name={navigation.getParam("name")}
        bio={navigation.getParam("bio")}
        url={navigation.getParam("url")}
        image={navigation.getParam("image")}
      />
    );
  }
}
