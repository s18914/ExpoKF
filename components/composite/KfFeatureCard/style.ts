import { StyleSheet } from "react-native";
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    padding: verticalScale(30),
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
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

  headers: {
    display: "flex",
    gap: verticalScale(3),
    height: "auto",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    paddingTop: "35%",
  },
  buttonsContainer: {
    display: "flex",
    gap: 10,
  },
});

export default style;
