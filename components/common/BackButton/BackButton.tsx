import React, { FunctionComponent } from "react";

import style from "./style";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { horizontalScale, verticalScale } from "../../../assets/styles/scaling";
import ArrowIcon from "../../../assets/icons/arrow_icon";

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const BackButton: FunctionComponent<Props> = (props) => {
  return (
    <Pressable
      onPress={() => props.onPress()}
      style={[style.container, props.style && props.style]}
    >
      <ArrowIcon
            width={horizontalScale(15)}
            height={verticalScale(13)}
            fill="black"
            style={{transform: [{rotate: "180deg"}]}}
          />
    </Pressable>
  );
};

export default BackButton;
