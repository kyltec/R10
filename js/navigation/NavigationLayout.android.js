import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import AboutScreen from "../screens/About";
import MapsScreen from "../screens/Maps";
import FavesScreen from "../screens/Faves";
import ScheduleScreen from "../screens/Schedule";
import SessionsScreen from "../screens/Sessions";

import { sharedNavigationOptions } from "./config";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapsStack = createStackNavigator(
  {
    Maps: MapsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FaveStack = createStackNavigator(
  {
    Fave: FavesScreen,
    Sessions: SessionsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Sessions: SessionsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

// Dedicated stacks for Schedule and Faves will go here too!

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapsStack,
    Fave: FaveStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        } else if (routeName === "Fave") {
          iconName = `md-heart`;
        } else if (routeName === "About") {
          iconName = `md-information-circle`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#999999",
      labelStyle: {
        fontSize: 10,
        fontFamily: "Montserrat"
      },
      style: {
        backgroundColor: "#000"
      }
    }
  }
);
