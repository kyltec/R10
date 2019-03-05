import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

import styles from "./styles";
import { Colours } from "../../config/styles";

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
                  color={Colours.red}
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
                  <TouchableOpacity
                    onPress={() => {
                      this.props.deleteFaveId(this.props.item.id);
                    }}
                  >
                    <LinearGradient
                      colors={["#9963ea", "#8797D6"]}
                      start={{ x: 0.0, y: 1.0 }}
                      end={{ x: 1.0, y: 0.0 }}
                      style={[StyleSheet.absoluteFill, styles.buttonLabel]}
                    >
                      <Text style={styles.buttonInfoRemove}>
                        Remove from Favorites
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.setFaveId(this.props.item.id);
                    }}
                  >
                    <LinearGradient
                      colors={["#9963ea", "#8797D6"]}
                      start={{ x: 0.0, y: 1.0 }}
                      end={{ x: 1.0, y: 0.0 }}
                      style={[StyleSheet.absoluteFill, styles.buttonLabel]}
                    >
                      <Text style={styles.buttonInfoAdd}>Add to Favorites</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Sessions.propTypes = {
  data: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  itemId: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  setFaveId: PropTypes.func.isRequired,
  faveIds: PropTypes.array.isRequired,
  deleteFaveId: PropTypes.func.isRequired
};
