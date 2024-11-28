import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import AuthInput from "@/components/auth/authInput";
import { Link } from "expo-router";
import Button from "@/components/auth/button";
import BrandHeader from "@/components/brandHeader";
import SocialAuthButton from "@/components/auth/socialAuthButton";
import Images from "@/constants/Images";
import AuthSeparator from "@/components/auth/separator";
import { Formik } from "formik";
import { signInSchema } from "@/schema/auth";

export default function index() {
  const initialValues = {
    email: "",
    password: "",
  };

  const OnSubmit = async (values: typeof initialValues) => {
    const body = {
      email: values.email,
      password: values.password,
    };
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, gap: 20 }}>
          <BrandHeader />
          <View>
            <Text style={styles.title}>Welcome Back!!</Text>
            <Text style={styles.subTitle}>Enter your Credential to log in</Text>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={OnSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <View>
                    <AuthInput
                      type="email"
                      placeholder="Email Address"
                      handleBlur={handleBlur("email")}
                      handleChange={handleChange("email")}
                      value={values.email}
                      touched={touched.email}
                      errors={errors.email}
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.error}>{errors.email}</Text>
                    )}
                  </View>
                  <View>
                    <AuthInput
                      type="password"
                      placeholder="Password"
                      iconName="lock-closed-outline"
                      handleBlur={handleBlur("password")}
                      handleChange={handleChange("password")}
                      value={values.password}
                      touched={touched.password}
                      errors={errors.password}
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.error}>{errors.password}</Text>
                    )}
                  </View>
                  <Link
                    href="(auth)/forgotPassword"
                    style={styles.forgotPasswordLink}
                  >
                    Forgot Password?
                  </Link>
                </View>
                <Button label="Login" onPress={handleSubmit} />
              </>
            )}
          </Formik>
          <AuthSeparator />
          <View style={styles.socialAuth}>
            <SocialAuthButton
              image={Images.facebook}
              label="Login with Facebook"
            />
            <SocialAuthButton image={Images.google} label="Login with Google" />
          </View>
          <View style={styles.authFooter}>
            <Text style={styles.authFooterText}>
              Don't have an account?{" "}
              <Link href="(auth)/register" style={styles.authFooterLink}>
                Register
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
    paddingHorizontal: 20,
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
    gap: 24,
  },
  error: {
    color: "red",
    fontFamily: "Poppins",
  },
  forgotPasswordLink: {
    fontFamily: "Poppins Medium",
    textAlign: "right",
  },
  socialAuth: {
    gap: 20,
  },
  authFooter: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
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
