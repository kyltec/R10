import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight
} from "react-native";
import moment from "moment";

export default class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.speaker.name);
    return (
      <View>
        <View>
          <Text>{this.props.location}</Text>
          <Text>{this.props.title}</Text>
          <Text>{this.props.setTime}</Text>
          <Text>{this.props.description}</Text>
          <Text>Presented by:</Text>
          <View>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Speaker", {
                  name: this.props.speaker.name
                });
              }}
            >
              <View>
                <Image
                  source={{ uri: this.props.speaker.image }}
                  style={{ width: 30, height: 30 }}
                />
                <Text>{this.props.speaker.name}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
