import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BrandHeader from "@/components/brandHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/auth/button";
import AuthSeparator from "@/components/auth/separator";
import SocialAuthButton from "@/components/auth/socialAuthButton";
import Images from "@/constants/Images";
import Colors from "@/constants/Colors";
import { Link, router } from "expo-router";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <BrandHeader />
      <View>
        <Text style={styles.title}>Join Us Today!</Text>
        <Text style={styles.subTitle}>
          Sign up now to unlock amazing features and start your journey with us.
        </Text>
      </View>
      <View style={styles.socialAuth}>
        <SocialAuthButton
          image={Images.facebook}
          label="Sign up with Facebook"
        />
        <SocialAuthButton image={Images.google} label="Sign up with Google" />
      </View>
      <AuthSeparator />
      <Button
        label="Continue with email"
        onPress={() => router.push("(auth)/email")}
      />
      <View style={styles.authFooter}>
        <Text style={styles.termsAndPolicy}>
          By signing up, you agree to our{" "}
          <Link href="" style={styles.termsAndPolicyLink}>
            Terms of service
          </Link>{" "}
          and{" "}
          <Link href="" style={styles.termsAndPolicyLink}>
            Privacy Policy
          </Link>
        </Text>
        <Text style={styles.authFooterText}>
          Already have an account?{" "}
          <Link href="(auth)" style={styles.authFooterLink}>
            Login
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 25,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins Bold",
    fontSize: 22,
  },
  subTitle: {
    color: "#7f7f7f",
    fontSize: 16,
  },
  inputContainer: {
    gap: 15,
  },
  socialAuth: {
    gap: 20,
  },
  authFooter: {
    gap: 12,
  },
  termsAndPolicy: {
    textAlign: "center",
  },
  termsAndPolicyLink: {
    color: Colors.primary,
    textDecorationLine: "underline",
    fontFamily: "Poppins Medium",
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
