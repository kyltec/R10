import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import About from "./About";
import { ActivityIndicator } from "react-native";

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 20,
      color: "#fff"
    }
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
              order
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) {
            <ActivityIndicator size="large" />;
          }
          if (error) {
            <Text>{`${error.message}`}</Text>;
            console.log(error);
          }
          return <About data={data} />;
        }}
      </Query>
    );
  }
}
