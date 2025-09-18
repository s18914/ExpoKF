import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(50),
    borderBottomWidth: 1,
    borderBlockColor: "rgba(220, 220, 220, 1)",
    paddingHorizontal: horizontalScale(25),
  },
  arrow: {
    position: "absolute",
    left: horizontalScale(23),
  },
});

export default style;
