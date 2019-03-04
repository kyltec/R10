import { StyleSheet } from "react-native";
import { font, colours } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  location: {
    fontFamily: font.main,
    fontSize: 17,
    color: colours.mediumGrey
  },
  title: {
    fontFamily: font.sub,
    fontSize: 30,
    marginBottom: 20
  },
  timeStamp: {
    color: colours.red,
    marginBottom: 20,
    fontFamily: font.sub,
    fontSize: 17
  },
  description: {
    fontFamily: font.main,
    fontSize: 20,
    marginBottom: 20,
    lineHeight: 30
  },
  subHeading: {
    fontFamily: font.sub,
    fontSize: 15,
    color: colours.mediumGrey,
    marginBottom: 20
  },
  speakerImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  speaker: {
    fontFamily: font.sub,
    fontSize: 20,
    marginLeft: 20
  },
  speakerContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center"
  },
  bottomBorder: {
    borderBottomWidth: 1,
    color: colours.lightGrey
  },
  button: {
    marginTop: 20
  },
  buttonLabel: {
    height: 50,
    width: "100%",
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 35
  },
  buttonInfo: {
    fontFamily: font.sub,
    fontSize: 15
  }
});

export default styles;
