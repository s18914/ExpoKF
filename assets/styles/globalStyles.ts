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
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: horizontalScale(25),
  },
});
