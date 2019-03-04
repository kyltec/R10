import { StyleSheet } from "react-native";
import { font, colours } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20
  },
  flex: {
    flex: 1,
    flexDirection: "row"
  },
  heading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  description: {}
});

export default styles;
