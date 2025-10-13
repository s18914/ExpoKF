import { StyleSheet } from "react-native";
import { scaleFontSize, verticalScale } from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  title0: {
    fontFamily: "EuclidCircularM",
    fontWeight: "500",
    letterSpacing: -1.67,
    fontSize: scaleFontSize(48),
    lineHeight: scaleFontSize(53),
  },
  title1: {
    fontFamily: "EuclidCircularM",
    fontWeight: "500",
    letterSpacing: -1.67,
    fontSize: scaleFontSize(40),
    lineHeight: scaleFontSize(46),
    paddingBottom: verticalScale(20),
  },
  title2: {
    fontFamily: "EuclidCircularM",
    fontWeight: "500",
    letterSpacing: -1.74,
    fontSize: scaleFontSize(34),
    lineHeight: scaleFontSize(46),
  },
  title3: {
    fontFamily: "EuclidCircularM",
    fontWeight: "500",
    letterSpacing: -1.09,
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(27),
  },
  title4: {
    fontFamily: "EuclidCircularR",
    fontWeight: "400",
    letterSpacing: -1,
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(27),
  },
  title5: {
    fontFamily: "EuclidCircularM",
    fontWeight: "500",
    letterSpacing: -0.75,
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
  title6: {
    fontFamily: "EuclidCircularR",
    fontWeight: "400",
    letterSpacing: -0.8,
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(25),
    paddingBottom: verticalScale(22),
  },
  title7: {
    fontFamily: "EuclidCircularR",
    fontWeight: "400",
    letterSpacing: -0.73,
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(27),
  },
  title10: {
    fontFamily: "EuclidCircularR",
    fontWeight: "400",
    letterSpacing: -0.82,
    textDecorationLine: "underline",
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(27),
  },

  title20: {
    fontFamily: "EuclidCircularS",
    fontWeight: "600",
    letterSpacing: -0.52,
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
  },

  title30: {
    fontFamily: "EuclidCircularM",
    fontWeight: "500",
    letterSpacing: -0.81,
    fontSize: scaleFontSize(26),
    lineHeight: scaleFontSize(32),
  },

  title40: {
    fontFamily: "EuclidCircularM",
    fontWeight: "500",
    letterSpacing: -0.63,
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(25),
  },
});

export default style;
