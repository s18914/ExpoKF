import React, { FunctionComponent } from 'react';

import style from './style';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  step: number;
}

const KfStatusBar: FunctionComponent<Props> = ({ step }) => {
  const barWidth = (step ?? 1) * 20;

  return (
    <LinearGradient
      colors={['rgba(10, 206, 148, 1)', 'rgba(104, 220, 69, 1)']}
      style={[style.progressLine, { width: `${barWidth}%` }]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    ></LinearGradient>
  );
};

export default KfStatusBar;
