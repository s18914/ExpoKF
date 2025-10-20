import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import KfText from "../../components/common/KfText/KfText";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import ArrowIcon from "../../assets/icons/arrow_icon";
import Logout from "../../assets/icons/logout"
import MenuItem from "../../components/common/MenuItem/MenuItem";

interface AskDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  onBiometricsPress: () => void;
}

const AskDrawer: React.FC<AskDrawerProps> = ({
  isVisible,
  onClose,
  onBiometricsPress,
}) => {
  const slideAnim = useRef(new Animated.Value(-200)).current; // Start above screen

  useEffect(() => {
    if (isVisible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }).start();
    } else {
      Animated.spring(slideAnim, {
        toValue: -50, // Slide up off screen
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }).start();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <TouchableOpacity
      style={styles.backdrop}
      activeOpacity={1}
      onPress={onClose}
    >
      <Animated.View
        style={[
          styles.drawerContainer,
          {
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.itemsSection}>
          <MenuItem title="Centrum pomocy" />
          <MenuItem title="Informacje prawne" />
          <MenuItem title="Formularz kontaktowy" />
        </View>
        
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
  },
  drawerContainer: {
    position: "absolute",
    top: verticalScale(60),
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingBottom: 20,
    zIndex: 1003,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 12,
  },
  itemsSection: {
    gap: verticalScale(9),
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(13),
  },
});

export default AskDrawer;
