import { StyleSheet, Dimensions } from "react-native";
import { Font, Colours } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    color: "#fff",
    height: Dimensions.get("window").height,
    paddingTop: 30,
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
    paddingRight: 60
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
    marginBottom: 20
  },

  buttonLabel: {
    height: 50,
    width: "100%",
    borderRadius: 35
  },

  buttonInfo: {
    color: "#fff",
    fontFamily: Font.sub,
    fontSize: 20,
    alignItems: "center",
    paddingLeft: 30,
    paddingTop: 10
  }
});

export default styles;
