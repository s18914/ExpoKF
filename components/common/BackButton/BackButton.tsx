import React, { FunctionComponent } from 'react';

import style from './style';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const BackButton: FunctionComponent<Props> = props => {
  return (
    <Pressable
      onPress={() => props.onPress()}
      style={[style.container, props.style && props.style]}
    >
      <FontAwesomeIcon color="#000000ff" icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
