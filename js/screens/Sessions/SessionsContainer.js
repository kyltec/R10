import React, { Component } from "react";
import { Query } from "react-apollo";
import { ActivityIndicator, Text, View } from "react-native";
import gql from "graphql-tag";
import Sessions from "./Sessions";
import FavesContainer from "../../context/";

export default class SessionsContainer extends Component {
  static navigationOptions = {
    title: "Sessions",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 20,
      color: "#fff"
    }
  };

  render() {
    let { navigation } = this.props;
    let itemId = navigation.getParam("id");
    let item = navigation.getParam("item");

    return (
      <Query
        variables={{ id: itemId }}
        query={gql`
          query allSessions($id: ID) {
            allSpeakers(filter: { id: $id }) {
              id
              bio
              image
              name
              url
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <ActivityIndicator size="large" />
              </View>
            );
          }
          if (error) {
            return <Text>Error</Text>;
          }
          return (
            <FavesContainer.Consumer>
              {({ faveIds, setFaveId, deleteFaveId }) => {
                return (
                  <Sessions
                    data={data.allSpeakers}
                    itemId={itemId}
                    item={item}
                    navigation={this.props.navigation}
                    setFaveId={setFaveId}
                    deleteFaveId={deleteFaveId}
                    faveIds={faveIds}
                  />
                );
              }}
            </FavesContainer.Consumer>
          );
        }}
      </Query>
    );
  }
}
