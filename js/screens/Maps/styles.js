import { StyleSheet } from "react-native";
import { Font } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  placeholder: {
    fontFamily: Font.main
  }
});

export default styles;
