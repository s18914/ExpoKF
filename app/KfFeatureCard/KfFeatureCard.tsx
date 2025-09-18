import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import style from './style';
import RadialGradient from 'react-native-radial-gradient';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import Header from '../common/KfTeaxt/KfText';
import KfButton, { KFButtonTypes } from '../common/KfButton/KfButton';
import FaceId from '../../assets/icons/fingerprint';
import KfPageHeader from '../composite/KfPageHeader/KfPageHeader';

interface Props {
  title: string;
  title2?: string;
  title3?: string;
  icon?: string;
  color?: GradientColor;
}

export enum GradientColor {
  Green,
  Yellow,
  Violet,
  Grey,
}

const KfFeatureCard: FunctionComponent<Props> = ({ title = '', ...props }) => {
  const getGradientColors = () => {
    switch (props.color) {
      case GradientColor.Green:
        return ['rgba(78, 207, 23, 0.25)', 'rgba(255, 255, 255, 1)'];
      case GradientColor.Yellow:
        return ['rgba(240, 193, 61, 0.25)', 'rgba(255, 255, 255, 1)'];
      case GradientColor.Violet:
        return ['rgba(116, 67, 255, 0.20)', 'rgba(255, 255, 255, 1)'];
      default:
        return ['rgba(97, 97, 97, 0.25)', 'rgba(255, 255, 255, 1)'];
    }
  };
  const gradientColors = getGradientColors();

  return (
    <View>
      <KfPageHeader
        step={2}
        title="Aktywacja aplikacji (krok 2 z 5)"
        onBack={function (s: string): {} {
          throw new Error('Function not implemented.');
        }}
      />
      <View style={style.container}>
        <View style={style.background}>
          <RadialGradient
            style={style.gradient}
            colors={gradientColors}
            stops={[0, 1]}
            center={[150, 150]}
            radius={150}
          ></RadialGradient>
          <FaceId
            style={style.icon}
            width={verticalScale(90)}
            height={verticalScale(90)}
            fill="#000"
          />
        </View>
        <View style={style.content}>
          <View style={style.headers}>
            <Header title={title} />
            {props.title2 && <Header title={props.title2} type={5} />}
            {props.title3 && <Header title={props.title3} type={5} />}
          </View>
          <View style={style.buttonsContainer}>
            <KfButton title={'Włącz Face ID'} type={KFButtonTypes.Gradient} />
            <KfButton title={'Nie teraz'} type={KFButtonTypes.Outlined} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default KfFeatureCard;
