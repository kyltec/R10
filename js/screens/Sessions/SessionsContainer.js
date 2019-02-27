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
    let { navigation } = this.props;
    let description = navigation.getParam("description");
    let title = navigation.getParam("title");
    let location = navigation.getParam("location");
    let startTime = navigation.getParam("startTime");
    let speaker = navigation.getParam("speaker");

    return (
      <Query
        query={gql`
          query allSpeakers($id: ID) {
            allSpeakers(filter: { id: $id }) {
              id
              bio
              name
              image
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
            <Sessions
              data={data.allSpeakers}
              navigation={this.props.navigation}
              title={title}
              description={description}
              location={location}
              startTime={startTime}
              speaker={speaker}
            />
          );
        }}
      </Query>
    );
  }
}
