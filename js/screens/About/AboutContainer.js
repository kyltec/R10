import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import About from "./About";

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
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
          console.log(data);

          return <About data={data} />;
        }}
      </Query>
    );
  }
}
