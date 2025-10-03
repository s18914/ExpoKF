import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    display: "flex",
    gap: horizontalScale(13),
    width: "100%",
    alignItems: "flex-start",
    paddingBottom: verticalScale(4),
  },
  inputContainer: {
    position: "relative",
    width: "100%",
  },
  rightIconsContainer: {
    position: "absolute",
    right: verticalScale(20),
    top: "50%",
    transform: [{ translateY: -12 }],
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  tooltipIcon: {
    width: verticalScale(25),
    height: verticalScale(25),
    borderRadius: verticalScale(25),
    borderColor: "rgb(192, 192, 192)",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tooltipIconError: {
    backgroundColor: "#EE5858",
  },
  tooltipText: {
    fontSize: scaleFontSize(18),
    color: "#000000",
    paddingLeft:verticalScale(1),
    fontFamily: "EuclidCircularM",
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
    fontFamily: "EuclidCircularR",
    fontSize: scaleFontSize(20),
    letterSpacing: -0.91,
    width: "100%",
    height: verticalScale(70),
    paddingRight: verticalScale(80),
  },
  inputWithText: {
    letterSpacing: 4.09,
    fontFamily: "EuclidCircularM",
  },
  inputError: {
    borderColor: "#EE5858",
    borderWidth: 2,
    color: "#EE5858",
  },
  inputActive: {
    borderColor: "#4ECF17",
    borderWidth: 2,
  },
  eyeIcon: {
    padding: 4,
  },
  errorText: {
    marginTop: verticalScale(5),
  },
  error: {
    borderColor: "rgba(238, 88, 88, 1)",
    borderWidth: 2,
  },
});

export default style;
