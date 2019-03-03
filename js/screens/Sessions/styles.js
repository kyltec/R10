import { StyleSheet } from "react-native";
import { font, colours } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  location: {
    fontFamily: font.main,
    fontSize: 17,
    color: colours.mediumGrey
  },
  title: {
    fontFamily: font.sub,
    fontSize: 30
  },
  timeStamp: {
    color: colours.red
  },
  description: {
    fontFamily: font.main,
    fontSize: 20
  },
  subHeading: {
    fontFamily: font.main,
    fontSize: 15,
    color: colours.mediumGrey
  },
  speakerImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  speaker: {
    fontFamily: font.sub,
    fontSize: 20
  },

  bottomBorder: {
    borderBottomWidth: 1,
    color: colours.lightGrey
  },
  button: {}
});

export default styles;
