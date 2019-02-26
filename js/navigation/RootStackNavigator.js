import { createStackNavigator, createAppContainer } from "react-navigation";
import About from "../screens/About";
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

// const AppNavigator = createStackNavigator({
//   About: {
//     screen: About
//   }
// });

// export default createAppContainer(AppNavigator)
