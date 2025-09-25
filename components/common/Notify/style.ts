import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  background: {
    borderRadius: verticalScale(10),
    backgroundColor: "rgba(242, 251, 239, 1)",
    paddingHorizontal: horizontalScale(17),
    paddingVertical: verticalScale(20),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(14),
  },
});

export default style;
