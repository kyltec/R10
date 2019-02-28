import React, { Component } from "react";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { FavesProvider } from "./context/";
import { StatusBar } from "react-native";

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
