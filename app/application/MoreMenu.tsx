import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import TileIcon from "../../components/common/TileIcon/TileIcon";
import KfText from "../../components/common/KfText/KfText";
import ArrowIcon from "../../assets/icons/arrow_icon";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import Spacer from "../../components/common/Spacer/Spacer";

interface MoreMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const MoreMenu: React.FC<MoreMenuProps> = ({ isVisible, onClose }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Menu Content */}
      <Animated.View
        style={[
          styles.menuContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {/* Section: Moje inwestycje */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TileIcon icon="funds" color="light-green" isSmall={true} />
            <KfText
              title="Moje inwestycje"
              type={30}
              otherStyles={{ height: verticalScale(50) }}
            />
          </View>

          <View style={styles.itemsSection}>
            <MenuItem
              title="Portfel inwestycyjny"
              badge="Załóż portfel"
              color="#4ECF17"
            />
            <MenuItem title="Portfel IKE" badge="Załóż IKE" color="#7443FF" />
            <MenuItem title="Portfel IKZE" badge="Załóż IKZE" color="#266AFF" />
            <MenuItem title="Obserwowane (12)" />
            <MenuItem title="Porównywane (4)" />
            <MenuItem title="Alerty (21)" marker color="#4ECF17" />
          </View>
        </View>

        {/* Section: Narzędzia */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TileIcon icon="tools" color="light-green" isSmall={true} />
            <KfText
              title="Narzędzia"
              type={30}
              otherStyles={{ height: verticalScale(50) }}
            />
          </View>

          <View style={styles.itemsSection}>
            <MenuItem title="Kreator portfela" />
            <MenuItem title="Portfel treningowy" />
            <MenuItem title="Terminy zleceń" />
          </View>
        </View>
      </Animated.View>
    </>
  );
};

interface MenuItemProps {
  title: string;
  marker?: boolean;
  badge?: string;
  color?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, marker, badge, color }) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
    <View style={styles.menuItemContent}>
      <View style={styles.menuItemTitle}>
        <KfText title={title} type={40} />
        {marker && <View style={[styles.marker, { backgroundColor: color }]} />}
      </View>
      <Spacer />
      {badge && (
        <View style={[styles.badge, { backgroundColor: `${color}25` }]}>
          <KfText
            title={badge}
            type={7}
            color={color ?? "black"}
            otherStyles={{ fontFamily: "EuclidCircularM" }}
          />
        </View>
      )}
    </View>
    <ArrowIcon fill="#1F2225" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: verticalScale(60), // (header height)
    bottom: verticalScale(75), // (footer height)
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 0,
    zIndex: 1000,
    maxHeight: Dimensions.get("window").height - 124,
  },
  section: {
    paddingVertical: verticalScale(30),
    paddingHorizontal: horizontalScale(26),
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(15),
    height: verticalScale(55),
  },
  itemsSection: {
    gap: verticalScale(9),
  },
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

export default MoreMenu;
