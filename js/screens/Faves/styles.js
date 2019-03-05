import { StyleSheet } from "react-native";
import { Font, Colours } from "../../config/styles";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  placeholderContain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },

  placeholder: {
    fontFamily: Font.main,
    fontSize: 15
  },

  timeStamp: {
    backgroundColor: Colours.lightGrey,
    color: "#000",
    fontFamily: Font.sub,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    paddingLeft: 20
  },

  bottomBorder: {
    borderBottomWidth: 0.5,
    color: Colours.lightGrey
  },

  title: {
    fontFamily: Font.sub,
    fontSize: 17,
    color: "#000",
    marginBottom: 10,
    marginLeft: 20
  },
  location: {
    color: Colours.mediumGrey,
    fontFamily: Font.main,
    marginLeft: 20
  },
  heart: {
    paddingRight: 20
  }
});

export default styles;
