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
    marginTop: 20
  },
  dropdown: {
    marginLeft: 10,
    marginRight: 10
  },
  menuItem: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#9963ea",
    marginTop: 20,
    marginBottom: 20
  },
  description: {
    fontSize: 17,
    fontFamily: font.main,
    marginTop: 20,
    marginBottom: 20
  },
  licence: {
    marginTop: 30,
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 30
  }
});

export default styles;
