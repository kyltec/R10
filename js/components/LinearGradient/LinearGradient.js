import React from "react";
import LinearGradient from "react-native-linear-gradient";

const LinearGradient = () => {
  return (
    <LinearGradient
      colors={["#9963ea", "#8797D6"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, styles.buttonLabel]}
    />
  );
};

export default LinearGradient;
