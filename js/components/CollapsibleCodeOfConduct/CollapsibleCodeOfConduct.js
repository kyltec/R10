import React, { Component } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  TouchableOpacity,
  Animated,
  Platform,
  UIManager
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

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

export default CollapsibleCodeOfConduct;
