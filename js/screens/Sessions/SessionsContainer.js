import React, { Component } from "react";
import { Query } from "react-apollo";
import { Text } from "react-native";
import gql from "graphql-tag";
import Sessions from "./Sessions";
import { formatSessionData } from "../../lib/helper/dataFormatHelpers";

export default class SessionsContainer extends Component {
  static navigationOptions = {
    title: "Sessions",
    headerTintcolor: "#fff",
    headerTitleStyle: {
      fontSize: 20
    }
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              title
              startTime
              location
              description
              speaker {
                name
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) {
            return <Text>loading...</Text>;
          }
          return <Sessions data={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }
}
