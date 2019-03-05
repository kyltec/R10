import React, { Component } from "react";
import { Query } from "react-apollo";
import { Text, ActivityIndicator } from "react-native";
import gql from "graphql-tag";
import Faves from "./Faves";
import { formatSessionData } from "../../lib/helper/dataFormatHelpers";
import FavesContext from "../../context/";
import PropTypes from "prop-types";

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves",
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
                let filterSession = data.allSessions.filter(session => {
                  return faveIds.includes(session.id);
                });
                return (
                  <Faves
                    data={formatSessionData(filterSession)}
                    faveIds={faveIds}
                    navigation={this.props.navigation}
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

FavesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
