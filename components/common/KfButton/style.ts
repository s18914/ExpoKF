import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  background: {
    width: "100%",
    height: verticalScale(60),
    display: "flex",
    borderRadius: horizontalScale(8),
  },
  pressable: {
    height: verticalScale(60),
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: "EuclidCircularM",
    fontSize: scaleFontSize(17),
    lineHeight: scaleFontSize(27),
    color: "#FFFFFF",
    textAlign: "center",
  },
  titleDark: {
    color: "#000000",
  },
  buttonGradient: {},
  buttonOutlined: {
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#97979720",
  },
  buttonOutlinedWhite: {
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "white",
  },
  buttonDark: {},
  buttonWhite: {
    backgroundColor: "#FFFFFF",
    borderRadius: horizontalScale(8),
  },
});

export default style;
