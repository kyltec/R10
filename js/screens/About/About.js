import React, { Component } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";

import styles from "./styles";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.generalInfo}>
          <Image source={require("../../assets/images/r10Logo.png")} />
          <Text>
            R10 is a conference that forces on just about any topic related to
            dev.
          </Text>
          <Text style={styles.heading}>Data and Venue</Text>
          <Text>
            The R10 conference will take place of Thursday June 27, 2019 in
            Vancouver, BC.
          </Text>
          <Text style={styles.heading}>Code of Conduct</Text>
        </View>
        <FlatList
          style={styles.dropdown}
          data={this.props.data.allConducts}
          renderItem={({ item }) => {
            return (
              <View>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={{ borderStyle: "solid", borderWidth: 0.5 }} />
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id + ""}
        />

        <Text style={styles.licence}>RED Academy </Text>
      </ScrollView>
    );
  }
}
