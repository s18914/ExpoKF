import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity } from "react-native";
import Wallet from "../../assets/icons/menu/wallet";
import Funds from "../../assets/icons/menu/funds";
import Basket from "../../assets/icons/menu/basket";
import Transfer from "../../assets/icons/menu/transfer";
import { useRouter, usePathname } from "expo-router";
import KfText from "../../components/common/KfText/KfText";

const windowDimentions = Dimensions.get("window");
const winHeight = windowDimentions.height;

const ThreeDots = ({ width = 21, height = 20, fill = "#1F2225", ...props }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4, paddingVertical: 7 }} {...props}>
    <View style={{ width: 5, height: 5, borderRadius: 4, backgroundColor: fill}} />
    <View style={{ width: 5, height: 5, borderRadius: 4, backgroundColor: fill}} />
    <View style={{ width: 5, height: 5, borderRadius: 4, backgroundColor: fill }} />
  </View>
);

const Footer: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Portfele', icon: Wallet, route: '/application' },
    { name: 'Fundusze', icon: Funds, route: '/hello' },
    { name: 'Koszyk', icon: Basket, route: '/registration' },
    { name: 'Transakcje', icon: Transfer, route: '/' },
    { name: 'Więcej', icon: ThreeDots, route: '/' },
  ];

  return (
    <View style={styles.footer}>
      {menuItems.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = pathname === item.route;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, isActive && styles.menuItemActive]}
            onPress={() => router.push(item.route)}
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

    //iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 13,

    // Android
    elevation: 9,

    ...Platform.select({
      android: {
        position: "absolute",
        top: winHeight - 60,
      },
      ios: {
        position: "absolute",
        top: winHeight - 60,
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
