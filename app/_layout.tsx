import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { SplashScreen } from "@/components/splashScreen";
import { StatusBar } from "expo-status-bar";
import OnBoarding from "./onBoarding";

const _layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) return;

    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [fontsLoaded]);

  if (!fontsLoaded || showSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar />
      {isFirstLaunch ? <Slot /> : <OnBoarding />}
    </>
  );
};

export default _layout;
