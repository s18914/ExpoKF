import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  background: {
    borderRadius: verticalScale(10),
    backgroundColor: "rgba(242, 251, 239, 1)",
    paddingHorizontal: horizontalScale(22),
    paddingVertical: verticalScale(17),
  },
});

export default style;
