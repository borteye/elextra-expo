import React from "react";
import { useSelector } from "react-redux";
import { getIsFirstLaunch } from "@/redux/features/firstLaunch";
import { Redirect } from "expo-router";
import OnBoarding from "./onBoarding";

export default function index() {
  const isFirstLaunch = useSelector(getIsFirstLaunch);

  if (!isFirstLaunch) return <OnBoarding />;

  return <Redirect href="(auth)" />;
}
