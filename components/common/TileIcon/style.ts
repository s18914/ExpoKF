import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  tileIconBox: {
    width: verticalScale(65),
    height: verticalScale(65),
    borderRadius: horizontalScale(9),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 50,
    overflow: "hidden",
  },
});

export default style;
