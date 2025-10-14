import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import KfText from '../../components/common/KfText/KfText';
import { verticalScale } from '../../assets/styles/scaling';
import ArrowIcon from '../../assets/icons/arrow_icon';

interface ProfileDrawerProps {
  isVisible: boolean;
  onClose: () => void;
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ isVisible, onClose }) => {
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
        <View style={styles.drawerContent}>
          <MenuItem title="Moje dane i ustawienia konta" />
              <MenuItem title="Biometria i kod PIN" />
              <MenuItem title="Powiadomienia (4) " />
              <MenuItem title="Wiadomości (2)" />
              <MenuItem title="Profil inwestora" />
              <MenuItem title="Wyloguj się" />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

interface MenuItemProps {
  title: string;
  badge?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, badge }) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
    <View style={styles.menuItemContent}>
      <KfText title={title} type={40} />
      {badge && <View style={styles.badge} />}
    </View>
    <ArrowIcon width={verticalScale(15)} height={verticalScale(12)} fill="#1F2225" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  },
  drawerContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
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
  drawerContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  menuItem: {
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12)
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

export default ProfileDrawer;
