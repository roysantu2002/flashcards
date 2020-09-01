import React from "react";
import { ActivityIndicator } from "react-native";
import Constants from "expo-constants";

const Indicator = () => (
  <ActivityIndicator
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "center",
    }}
    size="large"
    color="#5257f2"
  />
);

export default Indicator