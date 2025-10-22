import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import KfText from "../common/KfText/KfText";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

import MenuItem from "../common/MenuItem/MenuItem";
import TileIcon from "../common/TileIcon/TileIcon";

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

        <View style={styles.phoneSection}>
          <KfText title="Zadzwoń do nas" type={40} />
          <View style={styles.phoneSectionContent}>
            <View style={{paddingTop: verticalScale(5)}}>
              <TileIcon icon="phone" color="light-green" isSuperSmall />
            </View>
            
            <View >
              <KfText title="+48 22 599 42 67" type={40} otherStyles={{}} />
              <KfText title="Jesteśmy do&nbsp;Twojej dyspozycji od&nbsp;poniedziałku" type={7} otherStyles={{color: "#A7B7A0", letterSpacing: -0.38, fontSize: scaleFontSize(12), lineHeight: scaleFontSize(15)}}/>
              <KfText title="do&nbsp;piątku w godz.&nbsp;8-16" type={7} otherStyles={{color: "#A7B7A0", letterSpacing: -0.38, fontSize: scaleFontSize(12), lineHeight: scaleFontSize(15)}}/>
            </View>
          </View>
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
    paddingBottom: verticalScale(11),
  },
  phoneSection: {
    gap: horizontalScale(15),
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(15),
    backgroundColor: "#4ECF1718",
    borderRadius: horizontalScale(10),
    marginVertical: verticalScale(15),
    marginHorizontal: horizontalScale(25),
  },
  phoneSectionContent: {
    flexDirection: "row",
    gap: horizontalScale(15),
  },
});

export default AskDrawer;
