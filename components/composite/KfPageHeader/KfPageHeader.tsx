import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

import style from './style';
import BackButton from '../../common/BackButton/BackButton';
import Header from '../../common/KfTeaxt/KfText';
import KfStatusBar from '../../common/KfStatusBar/KfStatusBar';

interface Props {
  title: string;
  step: number;
  onBack: (s: string) => {};
}

const KfPageHeader: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <View>
      <View style={style.container}>
        <BackButton
          style={style.arrow}
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Header title={props.title} type={5} />
      </View>
      <KfStatusBar step={props.step} />
    </View>
  );
};

export default KfPageHeader;
