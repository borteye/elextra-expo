import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function Button({ label }: { label: string }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 50,
    padding: 12,
    width: "100%",
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins Medium",
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});
