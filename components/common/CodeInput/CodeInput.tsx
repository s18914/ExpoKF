import React, { useRef } from "react";
import { View, TextInput, StyleSheet, useWindowDimensions } from "react-native";
import styles from "./style";
import { horizontalScale, verticalScale } from "../../../assets/styles/scaling";
import KfText from "../KfText/KfText";

interface SmsCodeInputProps {
  label: string;
  value: string;
  onChange: (code: string) => void;
}

const GAP = horizontalScale(10);
const HORIZONTAL_PADDING = horizontalScale(50);

const SmsCodeInput: React.FC<SmsCodeInputProps> = ({
  label,
  value,
  onChange,
}) => {
  const { width } = useWindowDimensions();
  const totalGaps = GAP * 5;
  const inputWidth = (width - HORIZONTAL_PADDING - totalGaps) / 6;
  const inputs = Array.from({ length: 6 }, () => useRef(null));

  const handleChange = (text: string, idx: number) => {
    let newValue = value.split("");
    if (text.length > 1) {
      // Paste case
      newValue = text.split("").slice(0, 6);
    } else {
      newValue[idx] = text;
    }
    const code = newValue.join("").slice(0, 6);
    onChange(code);

    // Move to next input
    if (text && idx < 5) {
      inputs[idx + 1].current?.focus();
    }
  };

  const handleKeyPress = (e: any, idx: number) => {
    if (e.nativeEvent.key === "Backspace" && !value[idx] && idx > 0) {
      inputs[idx - 1].current?.focus();
    }
  };

  return (
    <>
      <KfText
        title={label}
        type={5}
        otherStyles={{ paddingTop: verticalScale(20) }}
      />
      <View style={styles.container}>
        {Array.from({ length: 6 }).map((_, idx) => (
          <TextInput
            key={idx}
            ref={inputs[idx]}
            style={[
              styles.input,
              { width: inputWidth },
              value[idx] && styles.inputFilled,
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={value[idx] || ""}
            onChangeText={(text) => handleChange(text, idx)}
            onKeyPress={(e) => handleKeyPress(e, idx)}
            textAlign="center"
            returnKeyType="next"
          />
        ))}
      </View>
    </>
  );
};

export default SmsCodeInput;
