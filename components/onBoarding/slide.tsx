import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { onBoarding } from "@/constants/loop";
import { width } from "@/constants/Constants";


export default function Slide({
  item,
}: {
  item: (typeof onBoarding)[number];
}) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
  },
  image: {
    height: "70%",
    width: width * 0.85,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontFamily: "Poppins Medium",
    textAlign: "center",
  },
  description: {
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
});
