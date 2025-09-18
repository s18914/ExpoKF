import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";

const windowDimentions = Dimensions.get("window");
const winHeight = windowDimentions.height;

const Footer: React.FC = () => (
  <View style={styles.footer}>
    <Text style={styles.menu}>ONE</Text>
    <Text style={styles.menu}>TWO</Text>
    <Text style={styles.menu}>THREE</Text>
    <Text style={styles.menu}>FOUR</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    ...Platform.select({
      android: {
        position: "absolute",
        top: winHeight - 50,
      },
      ios: {
        position: "absolute",
        top: winHeight - 50,
      },
      default: {
        position: "relative",
        bottom: 0,
      },
    }),
  },
  menu: {
    paddingHorizontal: 25,
    fontFamily: "EuclidCircularB",
    fontWeight: "700",
    color: "black",
  },
});

export default Footer;
