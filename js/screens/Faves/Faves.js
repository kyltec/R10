import React from "react";
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

const Faves = ({ data, navigation, faveIds }) => {
  console.log(data);
  return (
    <View>
      {data === [] ? (
        <View style={styles.placeholderContain}>
          <Text style={styles.placeholder}>No Favourites Added</Text>
        </View>
      ) : (
        <SectionList
          sections={data}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    if (!item.speaker) {
                      navigation.navigate("", {});
                    } else {
                      navigation.navigate("Sessions", {
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
                      {faveIds.includes(item.id) ? (
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
      )}
    </View>
  );
};

Faves.propTypes = {
  data: PropTypes.array.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigation: PropTypes.object.isRequired
};

export default Faves;
