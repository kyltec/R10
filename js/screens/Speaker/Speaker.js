import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  Linking,
  TouchableHighlight
} from "react-native";

export default class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 50 }}>
        <View>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Text>X</Text>
          </TouchableHighlight>
        </View>
        <Image
          source={{ uri: this.props.image }}
          style={{ width: 40, height: 40 }}
        />
        <Text>{this.props.name}</Text>
        <Text>{this.props.bio}</Text>
        <View>
          <Button
            onPress={() => Linking.openURL(`${this.props.url}`)}
            title="Learn More on Wikipedia"
            color="#841584"
            accessibilityLabel="Learn more about this speaker on Wikipedia"
          />
        </View>
      </ScrollView>
    );
  }
}
