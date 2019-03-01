import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  Button,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";

export default class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.item);
    return (
      <ScrollView>
        <View>
          <Text>{this.props.item.location}</Text>
          <Text>{this.props.item.title}</Text>
          <Text>{moment(this.props.item.startTime).format("LT")}</Text>
          <View>
            {this.props.faveIds.includes(this.props.item.id) ? (
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
          <Text>{this.props.item.description}</Text>
          <Text>Presented by:</Text>
          <View>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Speaker", {
                  name: this.props.speaker.name,
                  bio: this.props.speaker.bio,
                  url: this.props.speaker.url,
                  image: this.props.speaker.image,
                  id: this.props.speaker.id
                });
              }}
            >
              <View>
                <Image
                  source={{ uri: this.props.item.speaker.image }}
                  style={{ width: 30, height: 30 }}
                />
                <Text>{this.props.item.speaker.name}</Text>
              </View>
            </TouchableHighlight>

            <View>
              {this.props.faveIds.includes(this.props.item.id) ? (
                <Button
                  onPress={() => {
                    console.log("delete");
                    this.props.deleteFaveId(this.props.item.id);
                  }}
                  title="Remove from Favorites"
                  color="#9963ea"
                  accessibilityLabel="A purple button for favoriting this session"
                />
              ) : (
                <Button
                  onPress={() => {
                    console.log("add");
                    this.props.setFaveId(this.props.item.id);
                  }}
                  title="Add to Favorites"
                  color="#9963ea"
                  accessibilityLabel="A purple button for favoriting this session"
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
