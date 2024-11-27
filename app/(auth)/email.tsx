import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthInput from "@/components/auth/authInput";
import { ArrowLeft } from "lucide-react-native";
import { Link, router } from "expo-router";
import Colors from "@/constants/Colors";
import Button from "@/components/auth/button";

export default function EmailRegistration() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, gap: 20 }}>
          <Pressable style={styles.backIcon} onPress={() => router.back()}>
            <ArrowLeft size={24} color="black" />
          </Pressable>

          <Text style={styles.title}>Sign up to Elextra</Text>

          <View style={styles.inputContainer}>
            <View>
              <AuthInput placeholder="Username" />
            </View>
            <View>
              <AuthInput placeholder="Email Address" />
            </View>
            <View>
              <AuthInput
                placeholder="Password"
                type="password"
                iconName="lock-closed-outline"
              />
            </View>
            <View>
              <AuthInput
                placeholder="Confirm Password"
                type="password"
                iconName="lock-closed-outline"
              />
            </View>
            <Button label="Create Account" />
          </View>

          <View>
            <Text style={styles.authFooterText}>
              Already have an account?{" "}
              <Link href="(auth)/" style={styles.authFooterLink}>
                Login
              </Link>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 25,
  },
  title: {
    fontFamily: "Poppins Bold",
    fontSize: 22,
  },
  inputContainer: {
    gap: 24,
  },
  backIcon: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    alignSelf: "flex-start",
    padding: 6,
  },
  authFooterText: {
    fontFamily: "Poppins Medium",
    textAlign: "center",
  },
  authFooterLink: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
