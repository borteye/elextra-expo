import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BrandHeader from "@/components/brandHeader";
import Images from "@/constants/Images";
import { width } from "@/constants/Constants";
import { Formik } from "formik";
import { forgotPasswordSchema } from "@/schema/auth";
import AuthInput from "@/components/auth/authInput";
import Button from "@/components/auth/button";
import { router } from "expo-router";

export default function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const OnSubmit = async (values: typeof initialValues) => {
    const body = {
      email: values.email,
    };
  };

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <BrandHeader />
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subTitle}>
              Enter your email address to reset password
            </Text>
          </View>
          <Image
            source={Images.forgotPassword}
            resizeMode="contain"
            style={styles.image}
          />
          <Formik
            initialValues={initialValues}
            validationSchema={forgotPasswordSchema}
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
              <View style={styles.form}>
                <View>
                  <AuthInput
                    type="email"
                    placeholder="Enter your email"
                    iconName="mail"
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

                <View style={styles.buttonContainer}>
                  <Button label="Continue" onPress={handleSubmit} />
                  <Button
                    label="Cancel"
                    onPress={goBack}
                    viewStyle={styles.cancelViewStyle}
                    textStyle={styles.cancelTextStyle}
                  />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
  },
  avoidingView: {
    flex: 1,
  },
  title: {
    fontFamily: "Poppins Bold",
    fontSize: 22,
    textAlign: "center",
  },
  subTitle: {
    color: "#7f7f7f",
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    height: "50%",
    width: width * 0.85,
  },
  form: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 25,
    gap: 50,
  },
  buttonContainer: {
    gap: 8,
  },
  error: {
    color: "red",
    fontFamily: "Poppins",
  },
  cancelViewStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  cancelTextStyle: {
    color: "black",
  },
});
