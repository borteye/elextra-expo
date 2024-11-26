import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";

const _layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });
  return <Slot />;
};

export default _layout;
