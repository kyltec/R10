import { StyleSheet } from "react-native";
import { Font, Colours } from "../../config/styles";

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
    fontFamily: Font.main,
    fontSize: 17,
    color: Colours.mediumGrey
  },
  title: {
    fontFamily: Font.sub,
    fontSize: 30,
    marginBottom: 20
  },
  timeStamp: {
    color: Colours.red,
    marginBottom: 20,
    fontFamily: Font.sub,
    fontSize: 17
  },
  description: {
    fontFamily: Font.main,
    fontSize: 20,
    marginBottom: 20,
    lineHeight: 30
  },
  subHeading: {
    fontFamily: Font.sub,
    fontSize: 15,
    color: Colours.mediumGrey,
    marginBottom: 20
  },
  speakerImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  speaker: {
    fontFamily: Font.sub,
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
    color: Colours.lightGrey
  },
  button: {
    marginTop: 20
  },
  buttonLabel: {
    height: 50,
    width: "100%",
    borderRadius: 35
  },
  buttonInfoRemove: {
    fontFamily: Font.sub,
    fontSize: 17,
    color: "#fff",
    paddingTop: 15,
    paddingLeft: "20%"
  },
  buttonInfoAdd: {
    fontFamily: Font.sub,
    fontSize: 17,
    color: "#fff",
    paddingTop: 15,
    paddingLeft: "30%"
  }
});

export default styles;
