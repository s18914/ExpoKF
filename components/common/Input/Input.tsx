import React, { FunctionComponent, useState } from 'react';
import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

interface Props {
  keyboardType: KeyboardTypeOptions | undefined;
  placeholder: string;
  label: string;
  onChangeText: (s: string) => {};
  secureTextEntry?: boolean;
}

const Input: FunctionComponent<Props> = ({ ...props }) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : ''}
        style={style.input}
        value={value}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};

export default Input;
