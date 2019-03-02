import React, { Component } from "react";
import { Query } from "react-apollo";
import { ActivityIndicator, Text } from "react-native";
import gql from "graphql-tag";
import Speaker from "./Speaker";
import Session from "../Sessions";

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
      <Query
        query={gql`
            allSpeakers(filter: { id: $id }) {
              id
              bio
              image
              name
              url
            }
        `}
      >
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) {
            return <ActivityIndicator />;
          }
          if (error) {
            return <Text>Error</Text>;
          }
          return (
            <Speaker
              navigation={navigation}
              name={navigation.getParam("name")}
              bio={navigation.getParam("bio")}
              url={navigation.getParam("url")}
              image={navigation.getParam("image")}
            />
          );
        }}
        //{" "}
      </Query>
    );
  }
}
