import React, { Component } from "react";
import {
  View,
  Text,
  SectionList,
  TouchableHighlight,
  Button
} from "react-native";
import moment from "moment";

export default class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.data);
    return (
      <View>
        <SectionList
          sections={this.props.data}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableHighlight>
                  <Text>{item.title}</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text>{item.location}</Text>
                </TouchableHighlight>
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ backgroundColor: "#000", color: "#fff" }}>
              {moment(title).format("LT")}
            </Text>
          )}
          keyExtractor={item => item.id + ""}
        />
      </View>
    );
  }
}
