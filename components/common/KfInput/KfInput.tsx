import React, { FunctionComponent, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  Pressable,
} from "react-native";
import style from "./style";
import KfText from "../KfText/KfText";
import Tooltip from "../Tooltip/Tooltip";
import Eye from "../../../assets/icons/eye";
import { verticalScale } from "../../../assets/styles/scaling";

interface Props {
  keyboardType: KeyboardTypeOptions | undefined;
  placeholder: string;
  label: string;
  onChangeText: (s: string) => void;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  tooltipMessage?: string;
  hasError?: boolean;
  errorMessage?: string;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  isActive?: boolean;
}

const KfInput: FunctionComponent<Props> = ({ ...props }) => {
  const [internalValue, setInternalValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const value = props.value !== undefined ? props.value : internalValue;
  const isSecure = props.secureTextEntry && !isPasswordVisible;

  const handleChangeText = (val: string) => {
    if (props.value === undefined) {
      setInternalValue(val);
    }
    props.onChangeText(val);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      style={[
        style.container,
        !props.hasError && { paddingBottom: verticalScale(10) },
      ]}
    >
      <KfText
        title={props.label}
        type={5}
        otherStyles={{ marginBottom: verticalScale(5) }}
      />

      <View style={style.inputContainer}>
        <TextInput
          placeholder={props.placeholder ? props.placeholder : ""}
          style={[
            style.input,
            props.hasError && style.inputError,
            value.length > 0 && style.inputWithText,
            props.isActive && style.inputActive,
          ]}
          value={value}
          secureTextEntry={isSecure}
          keyboardType={props.keyboardType}
          onChangeText={handleChangeText}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          placeholderTextColor={props.hasError ? "#EE5858" : "#C0C0C0"}
        />

        <View style={style.rightIconsContainer}>
          {props.tooltipMessage && (
            <Tooltip message={props.tooltipMessage}>
              <View
                style={[
                  style.tooltipIcon,
                  props.hasError && style.tooltipIconError,
                ]}
              >
                <Text style={[style.tooltipText]}>?</Text>
              </View>
            </Tooltip>
          )}

          {props.showPasswordToggle && (
            <Pressable style={style.eyeIcon} onPress={togglePasswordVisibility}>
              <Eye width={24} height={16} fill="black" />
            </Pressable>
          )}
        </View>
      </View>

      {props.hasError && props.errorMessage && (
        <KfText
          title={props.errorMessage}
          type={5}
          color="#EE5858"
          otherStyles={style.errorText}
        />
      )}
    </View>
  );
};

export default KfInput;
