import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Slide from "../components/onBoarding/slide";
import PaginationDot from "../components/onBoarding/PaginationDot";
import Colors from "@/constants/Colors";
import { onBoarding } from "@/constants/loop";
import { height, width } from "@/constants/Constants";
import { useDispatch } from "react-redux";
import { SET_IS_FIRST_LAUNCH } from "@/redux/features/firstLaunch";
import { Redirect } from "expo-router";
import BrandHeader from "@/components/brandHeader";

export default function OnBoarding() {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastIndex, setIsLastIndex] = useState(false);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setCurrentIndex(index);

    if (index === onBoarding.length - 1) {
      setIsLastIndex(true);
    } else {
      setIsLastIndex(false);
    }
  };

  const handleCompleteOrSkipOnboarding = () => {
    dispatch(SET_IS_FIRST_LAUNCH(true));
    return <Redirect href="(auth)" />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <BrandHeader />

      <FlatList
        data={onBoarding}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <PaginationDot currentIndex={currentIndex} />
      <View style={styles.buttonContainer}>
        {isLastIndex ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleCompleteOrSkipOnboarding}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>
              Get Started
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "transparent" }]}
            onPress={handleCompleteOrSkipOnboarding}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    height: height * 0.75,
  },
  buttonContainer: {
    marginVertical: 25,
  },
  button: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 50,
    padding: 12,
    width: width * 0.9,
    marginHorizontal: "auto",
  },
  buttonText: {
    fontFamily: "Poppins Medium",
    textAlign: "center",
    fontSize: 16,
  },
});
