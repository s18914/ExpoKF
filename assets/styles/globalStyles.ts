import { StyleSheet } from "react-native";
import { horizontalScale } from "./scaling";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonsContainer: {
    display: "flex",
    gap: 15,
    width: "100%",
  },

  content: {
    display: "flex",
    flex: 1,
    width: "100%",
    padding: horizontalScale(25),
    justifyContent: "space-between",
  },
  error: {
    color: "rgba(238, 88, 88, 1)",
  },
});
