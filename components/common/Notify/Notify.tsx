import React, { FunctionComponent } from "react";

import style from "./style";
import { View } from "react-native";
import KfText from "../KfText/KfText";
import NotificationPhone from "../../../assets/icons/notification_phone.jsx";
import { scaleFontSize } from "../../../assets/styles/scaling";

interface Props {
  text: string;
}

const Notify: FunctionComponent<Props> = ({ text }) => {
  return (
    <View style={style.background}>
      <NotificationPhone />
      <KfText
        title={text}
        type={6}
        color="rgba(61, 193, 5, 1)"
        otherStyles={{
          letterSpacing: -0.82,
          lineHeight: scaleFontSize(24),
          paddingBottom: 0,
          textWrap: "wrap",
        }}
      />
    </View>
  );
};

export default Notify;
