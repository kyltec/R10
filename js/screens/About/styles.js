import { StyleSheet } from "react-native";
import { Colours, Font } from "../../config/styles";

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
    color: Colours.lightGrey
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
    fontFamily: Font.sub,
    fontWeight: "bold"
  },
  dropdown: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30
  },
  menuItem: {
    marginTop: 10,
    marginBottom: 10
  },

  description: {
    fontSize: 15,
    fontFamily: Font.main,
    marginTop: 20,
    marginBottom: 20
  },
  toggleItem: {
    fontSize: 15,
    fontFamily: Font.main,
    fontWeight: "bold",
    color: "#9963ea",
    paddingLeft: 10
  },
  licence: {
    marginTop: 30,
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 30,
    fontFamily: Font.main
  }
});

export default styles;
