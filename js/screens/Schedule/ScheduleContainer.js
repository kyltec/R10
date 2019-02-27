import React, { Component } from "react";
import { Query } from "react-apollo";
import { Text } from "react-native";
import gql from "graphql-tag";
import Schedule from "./Schedule";
import { formatSessionData } from "../../lib/helper/dataFormatHelpers";

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
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
                bio
                id
                image
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
          return (
            <Schedule
              data={formatSessionData(data.allSessions)}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}
