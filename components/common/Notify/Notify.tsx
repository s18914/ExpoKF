import React, { FunctionComponent } from "react";

import style from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import KfText from "../KfText/KfText";
import NotificationPhone from "../../../assets/icons/notification_phone.jsx";

interface Props {
  text: string;
}

const Notify: FunctionComponent<Props> = ({ text }) => {
  return (
    <View style={style.background}>
      <NotificationPhone />
      <KfText title={text} type={6} color="rgba(61, 193, 5, 1)" />
    </View>
  );
};

export default Notify;
