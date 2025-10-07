import React, { useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";
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
  setStatusBarTranslucent(false); //na telefonie false, na emulatorze true
  const [fontsLoaded] = useFonts({
    EuclidCircularR: require("../assets/fonts/EuclidCircularB-Regular.ttf"),
    EuclidCircularM: require("../assets/fonts/EuclidCircularB-Medium.ttf"),
    EuclidCircularS: require("../assets/fonts/EuclidCircularB-SemiBold.ttf"),
    EuclidCircularB: require("../assets/fonts/EuclidCircularB-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={{ flex: 1, height: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Slot />
        {/* <Footer /> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
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
