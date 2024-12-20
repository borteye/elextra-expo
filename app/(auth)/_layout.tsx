import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="forgotPassword" />
      <Stack.Screen name="register" />
      <Stack.Screen name="email" />
    </Stack>
  );
};

export default _layout;
