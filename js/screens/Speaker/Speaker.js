import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  TouchableHighlight,
  Platform,
  TouchableOpacity
} from "react-native";
import GradientButton from "../../components/GradientButton";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import PropTypes from "prop-types";

const Speaker = ({ navigation, name, bio, image, url }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.goBack()}>
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
        <Image source={{ uri: image }} style={styles.speakerImage} />
        <Text style={styles.speakerName}>{name}</Text>
        <Text style={styles.speakerBio}>{bio}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => Linking.openURL(`${url}`)}>
            <GradientButton />
            <Text style={styles.buttonInfo}>Read More on Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  navigation: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Speaker;
