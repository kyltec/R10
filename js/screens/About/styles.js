import { StyleSheet } from "react-native";
import { colours, font } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    marginBottom: 1,
    paddingBottom: 20
  },
  bottomBorder: {
    borderBottomWidth: 0.5,
    color: colours.lightGrey
  },
  generalContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  genteralInfo: {
    marginBottom: 20
  },
  heading: {
    fontSize: 20,
    fontFamily: font.sub,
    fontWeight: "bold"
  },
  dropdown: {
    marginLeft: 10,
    marginRight: 10
  },
  menuItem: {
    marginTop: 10,
    marginBottom: 10
  },

  description: {
    fontSize: 15,
    fontFamily: font.main,
    marginTop: 20,
    marginBottom: 20
  },
  toggleItem: {
    fontSize: 15,
    fontFamily: font.main,
    fontWeight: "bold",
    color: "#9963ea"
  },
  licence: {
    marginTop: 30,
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 30,
    fontFamily: font.main
  }
});

export default styles;
