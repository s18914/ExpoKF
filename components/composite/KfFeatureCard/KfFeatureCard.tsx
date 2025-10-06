import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import style from "./style";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import { verticalScale } from "../../../assets/styles/scaling";
import Header from "../../common/KfText/KfText";
import KfButton, { KFButtonTypes } from "../../common/KfButton/KfButton";
import UserEdit from "../../../assets/icons/user_edit";
import KfRegistrationHeader from "../KfRegistrationHeader/KfRegistrationHeader";

interface Props {
  title: string;
  title2?: string;
  title3?: string;
  icon?: string;
  color?: GradientColor;
  button1: string;
  button2?: string;
}

export enum GradientColor {
  Green,
  Yellow,
  Violet,
  Grey,
}

const KfFeatureCard: FunctionComponent<Props> = ({ title = "", ...props }) => {
  const getGradientColor = () => {
    switch (props.color) {
      case GradientColor.Green:
        return "rgba(78, 207, 23, 0.25)";
      case GradientColor.Yellow:
        return "rgba(240, 193, 61, 0.25)";
      case GradientColor.Violet:
        return "rgba(116, 67, 255, 0.20)";
      default:
        return "rgba(97, 97, 97, 0.25)";
    }
  };
  const gradientColor = getGradientColor();

  return (
    <View style={{ flex: 1 }}>
      <KfRegistrationHeader />
      <View style={style.container}>
        <View style={style.background}>
          <Svg
            width="300"
            height="300"
            style={{ position: "absolute", opacity: 0.5 }}
          >
            <Defs>
              <RadialGradient
                id="featureCardGradient"
                cx={"50%"}
                cy={"50%"}
                r={"50%"}
              >
                <Stop offset="0" stopColor={gradientColor} />
                <Stop offset="1" stopColor="rgba(255, 255, 255, 1)" />
              </RadialGradient>
            </Defs>
            <Rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#featureCardGradient)"
            />
          </Svg>
          <UserEdit
            style={style.icon}
            width={verticalScale(90)}
            height={verticalScale(90)}
            fill="#000"
          />
        </View>
        <View style={style.headers}>
          <Header title={title} isTextCenter={true} />
          {props.title2 && (
            <Header title={props.title2} isTextCenter={true} type={5} />
          )}
          {props.title3 && (
            <Header
              title={props.title3}
              isTextCenter={true}
              type={5}
              otherStyles={{ paddingTop: verticalScale(20) }}
            />
          )}
        </View>
        {/* <View style={style.buttonsContainer}>
            <KfButton title={props.button1} type={KFButtonTypes.Gradient} />
            {props.button2 && (
              <KfButton title={props.button2} type={KFButtonTypes.Outlined} />
            )}
          </View> */}
      </View>
    </View>
  );
};

export default KfFeatureCard;
