import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";
import { gradientButton } from "../../config/styles";

const GradientButton = () => {
  return (
    <LinearGradient
      colors={["#9963ea", "#8797D6"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, gradientButton]}
    />
  );
};

export default GradientButton;
