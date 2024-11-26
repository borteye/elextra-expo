import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface AuthInputProps {
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  type: "text" | "email" | "password";
  value: string;
  handleChange: (text: string) => void;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  touched: boolean | undefined;
  errors: string | undefined;
  placeholder: string;
}

export default function AuthInput({
  iconName,
  type,
  value,
  handleChange,
  handleBlur,
  touched,
  errors,
  placeholder,
}: AuthInputProps) {
  return (
    <View
      style={[
        styles.inputContainer,
        touched && errors
          ? { borderColor: "red" }
          : { borderColor: Colors.primary },
      ]}
    >
      <TextInput
        placeholder={placeholder}
        cursorColor="black"
        value={value}
        onChangeText={handleChange}
        onBlur={handleBlur}
        secureTextEntry={type === "password"}
        style={styles.input}
      />
      {iconName && (
        <Ionicons name={iconName} size={20} color={Colors.primary} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 1,
    borderBottomWidth: 1,
  },
  input: {
    marginLeft: 2,
    flex: 1,
    fontFamily: "Poppins",
    fontSize: 16,
  },
});
