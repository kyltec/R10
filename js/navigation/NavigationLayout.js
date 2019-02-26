import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AboutScreen from "../screens/About";
import MapsScreen from "../screens/Maps";
import FavesScreen from "../screens/Faves";
import ScheduleScreen from "../screens/Schedule";
import SpeakerScreen from "../screens/Speaker";
import SessionsScreen from "../screens/Sessions";

const AboutStack = createStackNavigator({
  About: AboutScreen
});

const MapsStack = createStackNavigator({
  Maps: MapsScreen
});

const FaveStack = createStackNavigator({
  Fave: FavesScreen,
  Sessions: SessionsScreen
});

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
  Sessions: SessionsScreen
});

// Dedicated stacks for Schedule and Faves will go here too!

export default createBottomTabNavigator({
  About: AboutStack,
  Fave: FaveStack,
  Maps: MapsStack,
  Schedule: ScheduleStack
});
