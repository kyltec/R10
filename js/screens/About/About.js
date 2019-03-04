import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity,
  Animated,
  Platform,
  UIManager
} from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

class CollapsibleCodeOfConduct extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isOpen: false,
      rotateValue: new Animated.Value()
    };
  }

  spin = () => {
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
      duration: 500,
      toValue: 1
    }).start();
  };

  toggle() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
    this.spin();
  }

  render() {
    const { styles, item } = this.props;
    const animateIcom = Animated.createAnimatedComponent(Icon);
    const rotateIcon = this.state.rotateValue.interpolate({
      inputRange: ["0", "1"],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            this.toggle();
            this.spin();
          }}
        >
          {this.state.isOpen ? (
            <View style={{ flexDirection: "row" }}>
              <View>
                <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                  <Icon
                    name={Platform.select({
                      ios: "ios-remove",
                      android: "md-remove"
                    })}
                    color="#9963ea"
                    size={20}
                  />
                </Animated.View>
              </View>
              <Text style={styles.toggleItem}>{item.title}</Text>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <View>
                <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                  <Icon
                    name={Platform.select({
                      ios: "ios-add",
                      android: "md-add"
                    })}
                    color="#9963ea"
                    size={20}
                  />
                </Animated.View>
              </View>
              <Text style={styles.toggleItem}>{item.title}</Text>
            </View>
          )}
        </TouchableOpacity>

        {this.state.isOpen ? (
          <Text style={styles.description}>{item.description}</Text>
        ) : null}
      </View>
    );
  }
}

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.generalContainer}>
          <View style={styles.genteralInfo}>
            <View style={styles.imageContainer}>
              <Image source={require("../../assets/images/r10Logo.png")} />
            </View>
            <View style={styles.bottomBorder} />
            <View>
              <Text style={styles.description}>
                R10 is a conference that forces on just about any topic related
                to dev.
              </Text>
              <Text style={styles.heading}>Data and Venue</Text>
              <Text style={styles.description}>
                The R10 conference will take place of Thursday June 27, 2019 in
                Vancouver, BC.
              </Text>
              <Text style={styles.heading}>Code of Conduct</Text>
            </View>
          </View>
        </View>
        <FlatList
          style={styles.dropdown}
          data={this.props.data.allConducts}
          renderItem={({ item }) => {
            return <CollapsibleCodeOfConduct styles={styles} item={item} />;
          }}
          keyExtractor={item => item.id + ""}
        />
        <View style={styles.generalContainer}>
          <View style={styles.bottomBorder} />
          <Text style={styles.licence}>
            &copy; Kyle Tecson, RED Academy 2019{" "}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

About.propTypes = {
  data: PropTypes.object.isRequired
};
