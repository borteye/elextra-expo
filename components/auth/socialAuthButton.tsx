import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";

export default function SocialAuthButton({
  label,
  image,
  onPress,
}: {
  label: string;
  image: ImageSourcePropType;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 50,
  },
  image: {
    height: 26,
    width: 26,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins Medium",
    marginHorizontal: "auto",
  },
});
