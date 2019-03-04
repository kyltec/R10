import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  Platform,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";
import { colours } from "../../config/styles";

export default class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.flexContainer}>
            <Text style={styles.location}>{this.props.item.location}</Text>
            <View>
              {this.props.faveIds.includes(this.props.item.id) ? (
                <Icon
                  name={Platform.select({
                    ios: "ios-heart",
                    android: "md-heart"
                  })}
                  color={colours.red}
                  size={20}
                />
              ) : (
                <Text />
              )}
            </View>
          </View>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <Text style={styles.timeStamp}>
            {moment(this.props.item.startTime).format("LT")}
          </Text>

          <Text style={styles.description}>{this.props.item.description}</Text>
          <Text style={styles.subHeading}>Presented by:</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Speaker", {
                  name: this.props.item.speaker.name,
                  bio: this.props.item.speaker.bio,
                  url: this.props.item.speaker.url,
                  image: this.props.item.speaker.image,
                  id: this.props.item.speaker.id
                });
              }}
            >
              <View style={styles.speakerContainer}>
                <Image
                  source={{ uri: this.props.item.speaker.image }}
                  style={styles.speakerImage}
                />
                <Text style={styles.speaker}>
                  {this.props.item.speaker.name}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.bottomBorder} />

            <View style={styles.button}>
              {this.props.faveIds.includes(this.props.item.id) ? (
                <View>
                  <LinearGradient
                    colors={["#cf392a", "#9963ea"]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    style={[StyleSheet.absoluteFill, styles.buttonLabel]}
                  />
                  <Button
                    style={styles.buttonInfo}
                    onPress={() => {
                      this.props.deleteFaveId(this.props.item.id);
                    }}
                    title="Remove from Favorites"
                    color="#fff"
                    accessibilityLabel="A purple button for favoriting this session"
                  />
                </View>
              ) : (
                <View>
                  <LinearGradient
                    colors={["#cf392a", "#9963ea"]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    style={[StyleSheet.absoluteFill, styles.buttonLabel]}
                  />
                  <Button
                    onPress={() => {
                      this.props.setFaveId(this.props.item.id);
                    }}
                    title="Add to Favorites"
                    color="#fff"
                    accessibilityLabel="A purple button for favoriting this session"
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
