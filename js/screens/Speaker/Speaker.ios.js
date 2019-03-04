import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableHighlight,
  Platform,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <View style={styles.speakerContainer}>
            <Icon
              name={Platform.select({
                ios: "ios-close",
                android: "md-close"
              })}
              color="white"
              size={50}
              style={{ justifyContent: "flex-start" }}
            />
            <Text style={styles.speakerTitle}>About The Speaker</Text>
          </View>
        </TouchableHighlight>

        <ScrollView style={styles.contentContainer}>
          <Image
            source={{ uri: this.props.image }}
            style={styles.speakerImage}
          />
          <Text style={styles.speakerName}>{this.props.name}</Text>
          <Text style={styles.speakerBio}>{this.props.bio}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`${this.props.url}`)}
            >
              <LinearGradient
                colors={["#9963ea", "#8797D6"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={[StyleSheet.absoluteFill, styles.buttonLabel]}
              />
              <Text style={styles.buttonInfo}>Read More on Wikipedia</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
