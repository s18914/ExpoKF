import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import TileIcon from '../../components/common/TileIcon/TileIcon';
import KfText from '../../components/common/KfText/KfText';
import ArrowIcon from '../../assets/icons/arrow_icon';

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
        <View style={styles.content}>
          {/* Section: Moje inwestycje */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <TileIcon icon="funds" color="light-green" isSmall={true} />
              <KfText title="Moje inwestycje" type={3} />
            </View>
            
            <View style={styles.menuItems}>
              <MenuItem title="Portfel inwestycyjny" />
              <MenuItem title="Portfel IKE" />
              <MenuItem title="Portfel IKZE" />
              <MenuItem title="Obserwowane (12)" />
              <MenuItem title="Porównywane (4)" />
              <MenuItem title="Alerty (21)" badge />
            </View>
          </View>

          {/* Section: Narzędzia */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <TileIcon icon="tools" color="light-green" isSmall={true} />
              <KfText title="Narzędzia" type={3} />
            </View>
            
            <View style={styles.menuItems}>
              <MenuItem title="Kreator portfela" />
              <MenuItem title="Portfel treningowy" />
              <MenuItem title="Terminy zleceń" />
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};

interface MenuItemProps {
  title: string;
  badge?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, badge }) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
    <View style={styles.menuItemContent}>
      <KfText title={title} type={4} />
      {badge && <View style={styles.badge} />}
    </View>
    <ArrowIcon width={10} height={10} fill="#1F2225" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 64, // Start right below header (header height)
    bottom: 60, // Reserve space for footer (footer height)
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 0, // Proste kąty
    zIndex: 1000,
    maxHeight: Dimensions.get('window').height - 124,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  menuItems: {
    gap: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4ECF17',
  },
});

export default MoreMenu;
