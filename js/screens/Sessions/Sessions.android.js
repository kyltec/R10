import React from "react";
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
import GradientButton from "../../components/GradientButton";
import PropTypes from "prop-types";

import styles from "./styles";
import { Colours } from "../../config/styles";

const Sessions = ({ item, faveIds, navigation, deleteFaveId, setFaveId }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.flexContainer}>
          <Text style={styles.location}>{item.location}</Text>
          <View>
            {faveIds.includes(item.id) ? (
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
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.timeStamp}>
          {moment(item.startTime).format("LT")}
        </Text>

        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.subHeading}>Presented by:</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Speaker", {
                name: item.speaker.name,
                bio: item.speaker.bio,
                url: item.speaker.url,
                image: item.speaker.image,
                id: item.speaker.id
              });
            }}
          >
            <View style={styles.speakerContainer}>
              <Image
                source={{ uri: item.speaker.image }}
                style={styles.speakerImage}
              />
              <Text style={styles.speaker}>{item.speaker.name}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.bottomBorder} />

          <View style={styles.buttonAndroid}>
            {faveIds.includes(item.id) ? (
              <TouchableOpacity
                onPress={() => {
                  deleteFaveId(item.id);
                }}
              >
                <View>
                  <GradientButton />
                  <Text style={styles.buttonInfoRemove}>
                    Remove from Favorites
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setFaveId(item.id);
                }}
              >
                <View>
                  <GradientButton />
                  <Text style={styles.buttonInfoAdd}>Add to Favorites</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

Sessions.propTypes = {
  data: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  itemId: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  setFaveId: PropTypes.func.isRequired,
  faveIds: PropTypes.array.isRequired,
  deleteFaveId: PropTypes.func.isRequired
};

export default Sessions;
