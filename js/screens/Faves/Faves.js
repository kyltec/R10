import React, { Component } from "react";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Platform
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import styles from "./styles";

export default class Faves extends Component {
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
                <TouchableOpacity
                  onPress={() => {
                    if (!item.speaker) {
                      this.props.navigation.navigate("", {});
                    } else {
                      this.props.navigation.navigate("Sessions", {
                        id: item.id,
                        item: item
                      });
                    }
                  }}
                >
                  <View style={styles.itemContainer}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.location}>{item.location}</Text>
                    </View>
                    <View>
                      {this.props.faveIds.includes(item.id) ? (
                        <Icon
                          style={styles.heart}
                          name={Platform.select({
                            ios: "ios-heart",
                            android: "md-heart"
                          })}
                          color="red"
                          size={16}
                        />
                      ) : (
                        <Text />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.bottomBorder} />
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.timeStamp}>{moment(title).format("LT")}</Text>
          )}
          keyExtractor={item => item.id + ""}
        />
      </View>
    );
  }
}

Faves.propTypes = {
  data: PropTypes.array.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigation: PropTypes.object.isRequired
};
