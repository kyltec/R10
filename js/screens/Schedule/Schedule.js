import React, { Component } from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import moment from "moment";

export default class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <SectionList
          sections={this.props.data}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate("Sessions", {
                      title: item.title,
                      location: item.location,
                      startTime: item.startTime,
                      id: item.id,
                      description: item.description,
                      speaker: item.speaker
                    })
                  }
                >
                  <View>
                    <Text>{item.title}</Text>
                    <Text>{item.location}</Text>
                  </View>
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
