import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import SpeakerModel from "../screens/Speaker";

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: SpeakerModel
    },
    {
      headerMode: "none",
      mode: "modal"
    }
  )
);
