import React, { FunctionComponent } from "react";
import { Pressable, Text, View } from "react-native";
import style from "./style";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

interface Props {
  title: string;
  type: KFButtonTypes;
  icon?: string;
  isDisabled?: boolean;
  onPress?: () => {};
}

export enum KFButtonTypes {
  Gradient,
  Outlined,
  Dark,
}

const KfButton: FunctionComponent<Props> = ({
  isDisabled = false,
  type = KFButtonTypes.Gradient,
  ...props
}) => {
  const styleToApply = () => {
    switch (type) {
      case KFButtonTypes.Outlined:
        return style.buttonOutlined;
      case KFButtonTypes.Dark:
        return style.buttonDark;
    }
  };

  if (type == KFButtonTypes.Gradient) {
    return (
      <LinearGradient
        colors={["rgba(5, 206, 153, 1))", "rgba(114, 222, 61, 1)"]}
        style={style.background}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Pressable
          disabled={isDisabled}
          style={[style.pressable, isDisabled && style.disabled]}
          onPress={() => (props.onPress ? props.onPress() : null)}
        >
          {props.icon == "reset" && (
            <Svg width={27} height={27} {...props}>
              <Path
                fill="#fff"
                d="M2.375 11.25V4.5l6.75 6.75zM22.625 15.75v6.75l-6.75-6.75z"
              ></Path>
              <Path
                fill="#fff"
                d="M2.966 10.125h2.43c1.267-2.656 3.97-4.5 7.104-4.5 4.341 0 7.875 3.532 7.875 7.875h2.25c0-5.582-4.542-10.125-10.125-10.125-4.399 0-8.14 2.824-9.534 6.75M4.625 13.5h-2.25c0 5.583 4.542 10.125 10.125 10.125 4.399 0 8.14-2.824 9.534-6.75h-2.43c-1.267 2.656-3.97 4.5-7.104 4.5-4.341 0-7.875-3.534-7.875-7.875"
              ></Path>
            </Svg>
          )}
          <Text style={style.title}>{props.title}</Text>
          {props.icon == "arrow" && (
            <Svg
              width={13}
              height={13}
              fill="#fff"
              viewBox="0 0 100 100"
              {...props}
            >
              <Path d="m58.369 10.173-5.62 5.87 31.267 29.892H0v8.117h84.016L52.75 83.957l5.619 5.87L100 49.993Z" />
            </Svg>
          )}
        </Pressable>
      </LinearGradient>
    );
  }

  return (
    <Pressable
      disabled={isDisabled}
      style={[
        style.pressable,
        style.buttonOutlined,
        isDisabled && style.disabled,
      ]}
      onPress={() => (props.onPress ? props.onPress() : null)}
    >
      <Text
        style={[style.title, type == KFButtonTypes.Outlined && style.titleDark]}
      >
        {props.title}
      </Text>

      <Svg width={15} height={15} fill="#fff" {...props}>
        <Path d="m58.369 10.173-5.62 5.87 31.267 29.892H0v8.117h84.016L52.75 83.957l5.619 5.87L100 49.993Z" />
      </Svg>
    </Pressable>
  );
};

export default KfButton;
