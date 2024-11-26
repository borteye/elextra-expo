import {
  FlatList,
  Image,
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
import Images from "@/constants/Images";
import Colors from "@/constants/Colors";
import { onBoarding } from "@/constants/loop";
import { height, width } from "@/constants/Constants";

export default function OnBoarding() {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Images.logo} style={styles.image} />
        <Text style={styles.text}>Elextra</Text>
      </View>

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
      <View style={styles.btnContainer}>
        {isLastIndex ? (
          <TouchableOpacity style={styles.getStartedBtn}>
            <Text style={styles.getStarted}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.skipBtn}>
            <Text style={styles.skip}>Skip</Text>
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
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    width: 45,
    height: 45,
  },
  text: {
    fontSize: 25,
    color: "#DE8946",
    fontFamily: "Poppins",
  },
  btnContainer: {
    marginVertical: 25,
  },
  skipBtn: {
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "transparent",
    padding: 14,
    width: width * 0.9,
    marginHorizontal: "auto",
  },
  getStartedBtn: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 50,
    padding: 14,
    width: width * 0.9,
    marginHorizontal: "auto",
  },
  skip: {
    fontFamily: "Poppins Medium",
    textAlign: "center",
    fontSize: 16,
  },
  getStarted: {
    fontFamily: "Poppins Medium",
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});
