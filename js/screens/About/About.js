import React, { Component } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";
import CollapsibleCodeOfConduct from "../../components/";

import styles from "./styles";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.generalContainer}>
          <View style={styles.genteralInfo}>
            <View style={styles.imageContainer}>
              <Image source={require("../../assets/images/r10Logo.png")} />
            </View>
            <View style={styles.bottomBorder} />
            <View>
              <Text style={styles.description}>
                R10 is a conference that forces on just about any topic related
                to dev.
              </Text>
              <Text style={styles.heading}>Data and Venue</Text>
              <Text style={styles.description}>
                The R10 conference will take place of Thursday June 27, 2019 in
                Vancouver, BC.
              </Text>
              <Text style={styles.heading}>Code of Conduct</Text>
            </View>
          </View>
        </View>
        <FlatList
          style={styles.dropdown}
          data={this.props.data.allConducts}
          renderItem={({ item }) => {
            return <CollapsibleCodeOfConduct styles={styles} item={item} />;
          }}
          keyExtractor={item => item.id + ""}
        />
        <View style={styles.generalContainer}>
          <View style={styles.bottomBorder} />
          <Text style={styles.licence}>
            &copy; Kyle Tecson, RED Academy 2019{" "}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

About.propTypes = {
  data: PropTypes.object.isRequired
};
