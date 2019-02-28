import React, { Component } from "react";
import { Text } from "react-native";
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
              {({ faveIds, setFaveId, deleteFaveId }) => {
                console.log(faveIds);
                let filterSession = data.allSessions.filter(session => {
                  console.log("++++", session);
                  return faveIds.includes(session.id);
                });
                return (
                  <Faves
                    data={formatSessionData(filterSession)}
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
