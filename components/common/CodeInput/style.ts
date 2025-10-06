import { StyleSheet } from "react-native";
import { scaleFontSize, verticalScale } from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginVertical: 12,
  },
  input: {
    height: verticalScale(75),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    backgroundColor: "#fff",
    fontSize: scaleFontSize(30),
    fontWeight: "bold",
    color: "#1F2225",
  },
  inputActive: {
    borderColor: "#4ECF17",
    borderWidth: 2,
  },
});

export default style;
