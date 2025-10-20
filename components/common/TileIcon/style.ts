import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  tileIconBox: {
    borderRadius: horizontalScale(9),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //minWidth: 50,
    overflow: "hidden",
    marginBottom: verticalScale(15),
  },
});

export default style;
