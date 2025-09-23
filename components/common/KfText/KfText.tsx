import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import style from "./style";

interface Props {
  title: string;
  type?: number;
  color?: string;
  numberOfLines?: number;
  isTextCenter?: boolean;
}

const KfText: FunctionComponent<Props> = ({
  title = "",
  type = 1,
  color = "#1f2225",
  numberOfLines,
  isTextCenter = true,
}) => {
  const styleToApply = () => {
    switch (type) {
      case 0:
        return style.title0;
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      case 4:
        return style.title4;
      case 5:
        return style.title5;
      case 6:
        return style.title6;
      case 7:
        return style.title7;
    }
  };
  return (
    <View>
      <Text
        style={[
          styleToApply(),
          color && { color: color },
          isTextCenter && { textAlign: "center" },
        ]}
        numberOfLines={numberOfLines ? numberOfLines : undefined}
      >
        {title}
      </Text>
    </View>
  );
};

export default KfText;
