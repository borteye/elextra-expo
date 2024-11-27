import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Images from "@/constants/Images";

export default function BrandHeader() {
  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.image} />
      <Text style={styles.text}>Elextra</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
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
});
