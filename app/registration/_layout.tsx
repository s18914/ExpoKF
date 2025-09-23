import React, { useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
  setStatusBarTranslucent,
} from "expo-status-bar";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  setStatusBarBackgroundColor("#ffffff", false);
  setStatusBarStyle("light", false);
  setStatusBarTranslucent(true); //na telefonie false, na emulatorze true
  const [fontsLoaded] = useFonts({
    EuclidCircularB: require("../../assets/fonts/EuclidCircularB-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Slot />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    padding: 16,
    backgroundColor: "#eee",
    alignItems: "center",
  },
});
