import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { SplashScreen } from "@/components/splashScreen";
import { StatusBar } from "expo-status-bar";
import ReduxProvider from "@/redux/Provider";
import QueryProvider from "@/query/Provider";
import Toast from "react-native-toast-message";

const _layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

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
    <ReduxProvider>
      <QueryProvider>
        <StatusBar />
        <Slot />
        <Toast />
      </QueryProvider>
    </ReduxProvider>
  );
};

export default _layout;
