import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { onBoarding } from "@/constants/loop";
import { height } from "@/constants/Constants";

export default function PaginationDot({
  currentIndex,
}: {
  currentIndex: number;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        {onBoarding.map((_, index) => {
          return (
            <View
              key={index.toString()}
              style={[
                styles.indicator,
                index === currentIndex && {
                  backgroundColor: Colors.primary,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.085,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
  },
  indicator: {
    height: 8,
    width: 8,
    marginHorizontal: 4,
    borderRadius: 8 / 2,
    backgroundColor: "#e4e4e4",
  },
});
