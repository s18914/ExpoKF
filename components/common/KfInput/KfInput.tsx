import React, { FunctionComponent, useState } from "react";
import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import style from "./style";
import KfText from "../KfText/KfText";

interface Props {
  keyboardType: KeyboardTypeOptions | undefined;
  placeholder: string;
  label: string;
  onChangeText: (s: string) => {};
  secureTextEntry?: boolean;
}

const KfInput: FunctionComponent<Props> = ({ ...props }) => {
  const [value, setValue] = useState("");
  return (
    <View style={style.container}>
      <KfText title={props.label} type={5} />
      <TextInput
        placeholder={props.placeholder ? props.placeholder : ""}
        style={style.input}
        value={value}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        onChangeText={(val) => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};

export default KfInput;
