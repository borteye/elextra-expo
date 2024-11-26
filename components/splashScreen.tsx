import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
  withSequence,
  runOnJS,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Colors from "@/constants/Colors";
import Images from "@/constants/Images";

export const SplashScreen = () => {
  const translateY = useSharedValue(100);
  const textOpacity = useSharedValue(0);
  const textTranslateY = useSharedValue(20);

  const animateTranslateY = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateY: textTranslateY.value }],
  }));

  React.useEffect(() => {
    translateY.value = withSequence(
      withTiming(200, { duration: 700, easing: Easing.inOut(Easing.ease) }),
      withSpring(5, { damping: 5, stiffness: 90 }, () => {
        runOnJS(startTextAnimation)();
      })
    );
  }, []);

  const startTextAnimation = () => {
    textOpacity.value = withTiming(1, { duration: 500 });
    textTranslateY.value = withTiming(-150, { duration: 1000 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Animated.Image
        source={Images.logo}
        resizeMode="contain"
        alt="splash-image"
        style={[styles.image, animateTranslateY]}
      />
      <Animated.View style={[styles.textContainer, animatedTextStyle]}>
        <Text
          style={[
            styles.text,
            { fontFamily: "Poppins Bold", fontSize: 25, color: Colors.primary },
          ]}
        >
          Elextra
        </Text>
        <Text style={[styles.text, { color: "#F1D8B8" }]}>
          On the eight day, GOD created Elextra{" "}
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 220,
  },
  textContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
