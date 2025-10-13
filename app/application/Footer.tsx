import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import Wallet from "../../assets/icons/menu/wallet";
import Funds from "../../assets/icons/menu/funds";
import Basket from "../../assets/icons/menu/basket";
import Transfer from "../../assets/icons/menu/transfer";
import { useRouter, usePathname } from "expo-router";
import KfText from "../../components/common/KfText/KfText";

const ThreeDots = ({ width = 21, height = 20, fill = "#1F2225", ...props }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4, paddingVertical: 7 }} {...props}>
    <View style={{ width: 5, height: 5, borderRadius: 4, backgroundColor: fill}} />
    <View style={{ width: 5, height: 5, borderRadius: 4, backgroundColor: fill}} />
    <View style={{ width: 5, height: 5, borderRadius: 4, backgroundColor: fill }} />
  </View>
);

interface FooterProps {
  onMorePress?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onMorePress }) => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Portfele', icon: Wallet, route: '/application', action: null },
    { name: 'Fundusze', icon: Funds, route: '/hello', action: null },
    { name: 'Koszyk', icon: Basket, route: '/registration', action: null },
    { name: 'Transakcje', icon: Transfer, route: '/', action: null },
    { name: 'Więcej', icon: ThreeDots, route: null, action: 'more' },
  ];

  const handlePress = (item: any) => {
    if (item.action === 'more' && onMorePress) {
      onMorePress();
    } else if (item.route) {
      router.push(item.route);
    }
  };

  return (
    <View style={styles.footer}>
      {menuItems.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = pathname === item.route;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, isActive && styles.menuItemActive]}
            onPress={() => handlePress(item)}
          >
            <IconComponent
              width={21}
              height={20}
              fill={isActive ? "#4ECF17" : "#1F2225"}
            />
            <KfText title={item.name} type={20}/>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    zIndex: 900, // Above MoreMenu

    //iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3, // Shadow pointing up
    },
    shadowOpacity: 0.12,
    shadowRadius: 13,

    // Android
    elevation: 9,

    ...Platform.select({
      android: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      },
      ios: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      },
      default: {
        position: "relative",
        bottom: 0,
      },
    }),
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    display: "flex",
    gap: 5,
    height: "100%"
  },

  menuItemActive: {
    borderTopWidth: 3,
    borderTopColor: "#4ECF17"
  }
});

export default Footer;
