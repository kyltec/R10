import React, { Component } from "react";
import PropTypes from "prop-types";
import Speaker from "./Speaker";

export default class SessionsContainer extends Component {
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

SessionsContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
