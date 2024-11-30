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
import { Formik } from "formik";
import { signUpSchema } from "@/schema/auth";
import Toast from "react-native-toast-message";
import { useSignUp } from "@/hooks/auth/useSignUp";

export default function EmailRegistration() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const OnSubmit = async (values: typeof initialValues) => {
    const body = {
      username: values.username,
      email: values.email,
      password: values.confirmPassword,
    };
    mutate(body);
  };

  const onSuccess = (success: any) => {
    Toast.show({
      type: "success",
      text1: "Error",
      text2: success.message,
    });
  };
  const onError = (error: any) => {
    let errorMessage = error.message;
    try {
      const parsedError = JSON.parse(error.message);
      if (parsedError?.error) {
        errorMessage = parsedError.error;
      }
    } catch (parseError) {}

    Toast.show({
      type: "error",
      text1: "Error",
      text2: errorMessage || "An unexpected error occurred.",
    });
  };

  const { mutate, isPending } = useSignUp(onSuccess, onError);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, gap: 20 }}>
          <Pressable style={styles.backIcon} onPress={() => router.back()}>
            <ArrowLeft size={24} color="black" />
          </Pressable>

          <Text style={styles.title}>Sign up to Elextra</Text>

          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
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
                      type="text"
                      placeholder="Username"
                      handleBlur={handleBlur("username")}
                      handleChange={handleChange("username")}
                      value={values.username}
                      touched={touched.username}
                      errors={errors.username}
                    />
                    {errors.username && touched.username && (
                      <Text style={styles.error}>{errors.username}</Text>
                    )}
                  </View>
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
                  <View>
                    <AuthInput
                      type="password"
                      placeholder="Confirm Password"
                      iconName="lock-closed-outline"
                      handleBlur={handleBlur("confirmPassword")}
                      handleChange={handleChange("confirmPassword")}
                      value={values.confirmPassword}
                      touched={touched.confirmPassword}
                      errors={errors.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <Text style={styles.error}>{errors.confirmPassword}</Text>
                    )}
                  </View>
                </View>
                <Button
                  label="Create Account"
                  onPress={handleSubmit}
                  disabled={isPending}
                />
              </>
            )}
          </Formik>

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
  error: {
    color: "red",
    fontFamily: "Poppins",
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
