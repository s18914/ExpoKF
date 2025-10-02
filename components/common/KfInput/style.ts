import { StyleSheet } from "react-native";
import { scaleFontSize, verticalScale } from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    display: "flex",
    gap: 13,
    width: "100%",
    alignItems: "flex-start",
    paddingBottom: verticalScale(15),
  },
  label: {
    fontFamily: "EuclidCircularB",
    fontWeight: "400",
    color: "#36455A",
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
  },
  input: {
    padding: verticalScale(22),
    borderWidth: 1,
    borderColor: "rgb(192, 192, 192)",
    borderRadius: verticalScale(7),
    fontFamily: "EuclidCircularM",
    fontSize: scaleFontSize(20),
    width: "100%",
    height: verticalScale(70),
    //letterSpacing: scaleFontSize(4),
  },
  error: {
    outlineColor: "rgba(238, 88, 88, 1)",
    outlineWidth: 2,
  },
});

export default style;
