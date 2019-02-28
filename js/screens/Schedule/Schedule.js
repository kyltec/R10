import React, { Component } from "react";
import {
  View,
  Text,
  SectionList,
  TouchableHighlight,
  Platform
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.faveIds);
    return (
      <View>
        <SectionList
          sections={this.props.data}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableHighlight
                  onPress={() => {
                    if (!item.speaker) {
                      this.props.navigation.navigate("", {});
                    } else {
                      this.props.navigation.navigate("Sessions", {
                        title: item.title,
                        location: item.location,
                        startTime: item.startTime,
                        id: item.id,
                        description: item.description,
                        speaker: item.speaker
                      });
                    }
                  }}
                >
                  <View style={styles.itemContainer}>
                    <View>
                      <Text>{item.title}</Text>
                      <Text>{item.location}</Text>
                    </View>
                    <View>
                      {this.props.faveIds.includes(this.props.id) ? (
                        <Icon
                          name={Platform.select({
                            ios: "ios-heart",
                            android: "md-heart"
                          })}
                          color="red"
                          size={16}
                        />
                      ) : (
                        ""
                      )}
                    </View>
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
