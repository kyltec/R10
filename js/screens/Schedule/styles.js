import { StyleSheet } from "react-native";
import { font, colours } from "../../config/styles";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  timeStamp: {
    backgroundColor: colours.lightGrey,
    color: "#000",
    fontFamily: font.sub,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1
  },

  bottomBorder: {
    borderBottomWidth: 0.5,
    color: colours.lightGrey
  },

  title: {
    fontFamily: font.sub,
    fontSize: 17,
    color: "#000",
    marginBottom: 10
  },
  location: {
    color: colours.mediumGrey,
    fontFamily: font.main
  }
});

export default styles;
