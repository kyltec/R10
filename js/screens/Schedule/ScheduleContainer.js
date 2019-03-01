import React, { Component } from "react";
import { Query } from "react-apollo";
import { Text, ActivityIndicator } from "react-native";
import gql from "graphql-tag";
import Schedule from "./Schedule";
import { formatSessionData } from "../../lib/helper/dataFormatHelpers";
import FavesContext from "../../context/";

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
    headerTintcolor: "#fff",
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
                url
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => {
                console.log(faveIds);
                return (
                  <Schedule
                    data={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                    faveIds={faveIds}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
