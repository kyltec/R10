import { StyleSheet, Dimensions, Platform } from "react-native";
import { Font } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    color: "#fff",
    height: Dimensions.get("window").height,
    paddingTop: 0,
    padding: 20,
    flex: 1
  },

  speakerContainer: {
    flexDirection: "row",
    paddingTop: 50,
    justifyContent: "space-between",
    alignItems: "center"
  },

  speakerTitle: {
    color: "#fff",
    fontFamily: Font.sub,
    fontSize: 20,
    paddingRight: Platform.OS === "ios" ? 60 : 80
  },

  heading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  speakerImage: {
    alignSelf: "center",
    height: 140,
    width: 140,
    borderRadius: 70,
    marginTop: 30
  },

  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10
  },

  speakerName: {
    alignSelf: "center",
    fontFamily: Font.sub,
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20
  },

  speakerBio: {
    fontFamily: Font.main,
    fontSize: 17,
    lineHeight: 30,
    marginBottom: 30
  },

  buttonContainer: {
    marginBottom: 40
  },

  buttonLabel: {
    height: 50,
    width: "100%",
    borderRadius: 35,
    marginBottom: 40
  },

  buttonInfo: {
    color: "#fff",
    fontFamily: Font.sub,
    fontSize: 20,
    alignItems: "center",
    paddingLeft: Platform.OS === "ios" ? 30 : 50,
    paddingTop: Platform.OS === "ios" ? 10 : 13
  }
});

export default styles;
