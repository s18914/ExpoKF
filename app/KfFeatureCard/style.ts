import { StyleSheet } from "react-native";
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: verticalScale(800),
    display: "flex",

    padding: verticalScale(30),
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  background: {
    width: "100%",
    height: verticalScale(420),
    position: "absolute",
    top: 0,
    left: horizontalScale(30),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
  },
  gradient: {
    width: 300,
    height: 300,
  },
  content: {
    display: "flex",
    gap: verticalScale(10),
    height: "60%",
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
  headers: {
    display: "flex",
    gap: verticalScale(10),
    height: "auto",
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    display: "flex",
    gap: 10,
  },
});

export default style;
