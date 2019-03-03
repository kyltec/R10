import React, { Component } from "react";
import {
  View,
  Text,
  SectionList,
  Platform,
  TouchableOpacity
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
                    <View style={styles.heart}>
                      {this.props.faveIds.includes(item.id) ? (
                        <Icon
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
