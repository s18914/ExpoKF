import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale, scaleFontSize } from "../../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    position: 'relative',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipContainer: {
    alignItems: 'center',
    maxWidth: horizontalScale(280),
    marginHorizontal: horizontalScale(20),
  },
  tooltipTop: {
    marginBottom: verticalScale(100),
  },
  tooltipBottom: {
    marginTop: verticalScale(100),
  },
  tooltip: {
    backgroundColor: '#36455A',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(12),
    borderRadius: horizontalScale(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: horizontalScale(8),
    borderRightWidth: horizontalScale(8),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  arrowBottom: {
    borderTopWidth: verticalScale(8),
    borderTopColor: '#36455A',
    marginTop: -1,
  },
  arrowTop: {
    borderBottomWidth: verticalScale(8),
    borderBottomColor: '#36455A',
    marginBottom: -1,
  },
});

export default style;
