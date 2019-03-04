import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Linking,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Icon name="ios-close" color="#000" size={30} />
          </TouchableHighlight>
          <Text>About The Speaker</Text>
        </View>
        <View>
          <Image
            source={{ uri: this.props.image }}
            style={{ width: 40, height: 40 }}
          />
          <Text>{this.props.name}</Text>
        </View>
        <Text>{this.props.bio}</Text>
        <View>
          <Button
            onPress={() => Linking.openURL(`${this.props.url}`)}
            title="Learn More on Wikipedia"
            color="#841584"
            accessibilityLabel="Learn more about this speaker on Wikipedia"
          />
        </View>
      </View>
    );
  }
}
