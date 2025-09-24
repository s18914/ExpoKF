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
    paddingHorizontal: verticalScale(26),
    paddingVertical: verticalScale(21),
    borderWidth: 1,
    borderColor: "rgb(192, 192, 192)",
    borderRadius: verticalScale(7),
    fontFamily: "EuclidCircularR",
    fontSize: scaleFontSize(20),
    width: "100%",
  },
});

export default style;
