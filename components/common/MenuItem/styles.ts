import {
  StyleSheet,
} from "react-native";
import { horizontalScale, verticalScale } from "../../../assets/styles/scaling";

export const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    height: verticalScale(40),
    gap: horizontalScale(15),
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuItemTitle: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: horizontalScale(3),
  },
  marker: {
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(8),
  },
  badge: {
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
    paddingBottom: verticalScale(2),
    borderRadius: horizontalScale(30),
    justifyContent: "center",
    marginLeft: "auto",
  },
});