import { FunctionComponent } from "react";
import { View } from "react-native";
import style from "./style";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

import BadgeLock from "../../../assets/icons/badge_lock.jsx";
import Wallet from "../../../assets/icons/menu/wallet.jsx";
import Tools from "../../../assets/icons/tools.jsx";
import User from "../../../assets/icons/user.jsx";

type IconName = keyof typeof iconComponents;

interface TileIconProps {
  icon: IconName;
  color?: keyof typeof colors;
}

const colors = {
  "dark-green": "rgba(0, 209, 139, 0.4)",
  "light-green": "rgba(78, 207, 23, 0.4)",
  yellow: "rgba(235, 197, 42, 0.4)",
  "light-violet": "rgba(196, 67, 255, 0.4)",
  blue: "rgba(38, 106, 255, 0.4)",
  "dark-violet": "rgba(116, 67, 255, 0.4)",
  default: "rgba(234, 44, 159, 0.4)",
};

const iconComponents = {
  badge_lock: BadgeLock,
  wallet: Wallet,
  tools: Tools,
  user: User,
};

const TileIcon: FunctionComponent<TileIconProps> = ({
  icon,
  color = "default",
}) => {
  const bgColor = colors[color];
  const IconComponent = iconComponents[icon] || null;

  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: bgColor,
        },
        style.tileIconBox,
      ]}
    >
      <Svg
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, opacity: 0.6 }}
      >
        <Defs>
          <RadialGradient id="grad" cx="50%" cy="50%" r="60%">
            <Stop offset="0" stopColor={bgColor} />
            <Stop offset="0.8" stopColor="rgba(255,255,255,0)" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {IconComponent && (
        <IconComponent width={28} height={28} fill="#4ecf17ff" />
      )}
    </View>
  );
};
export default TileIcon;

//backgroundImage: `radial-gradient(${bgColor} 0%, rgba(255, 255, 255, 0%) 80%)`,
