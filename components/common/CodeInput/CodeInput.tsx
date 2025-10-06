import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./style";
import { horizontalScale, verticalScale } from "../../../assets/styles/scaling";
import KfText from "../KfText/KfText";

interface CodeInputProps {
  label: string;
  value: string;
  onChange: (code: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  isActive?: boolean;
}

const GAP = horizontalScale(10);
const HORIZONTAL_PADDING = horizontalScale(50);

const CodeInput: React.FC<CodeInputProps> = ({
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  isActive,
}) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const totalGaps = GAP * 5;
  const inputWidth = (width - HORIZONTAL_PADDING - totalGaps) / 6;
  const inputs = Array.from({ length: 6 }, () => useRef(null));

  const handleChange = (text: string, idx: number) => {
    let newValue = value.split("");

    if (text === "") {
      if (idx > 0) {
        newValue[idx - 1] = "";
        const code = newValue.join("").slice(0, 6);
        onChange(code);
        setActiveIndex(idx - 1);
        setTimeout(() => {
          //@ts-ignore
          inputs[idx - 1].current?.focus();
        }, 50);
      } else {
        newValue[idx] = "";
        const code = newValue.join("").slice(0, 6);
        onChange(code);
      }
      return;
    }

    if (text.length > 1) {
      newValue = text.split("").slice(0, 6);
    } else {
      newValue[idx] = text;
    }
    const code = newValue.join("").slice(0, 6);
    onChange(code);

    // Move to next input
    if (text && idx < 5) {
      setActiveIndex(idx + 1);
      setTimeout(() => {
        //@ts-ignore
        inputs[idx + 1].current?.focus();
      }, 50);
    }
  };

  const onInputFocus = (idx: number) => {
    if (!isActive) {
      onFocus && onFocus();
    }
    if (activeIndex === undefined) {
      setActiveIndex(0);
      setTimeout(() => {
        //@ts-ignore
        inputs[0].current?.focus();
      }, 50);
    } else if (activeIndex !== idx) {
      setActiveIndex(activeIndex);
      setTimeout(() => {
        //@ts-ignore
        inputs[activeIndex].current?.focus();
      }, 50);
    }
  };

  return (
    <View>
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
              isActive && activeIndex === idx && styles.inputActive,
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={value[idx] || ""}
            onChangeText={(text) => handleChange(text, idx)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace" && !value[idx]) {
                handleChange("", idx);
              }
            }}
            onFocus={() => onInputFocus(idx)}
            onBlur={idx === 5 ? onBlur : undefined}
            textAlign="center"
            returnKeyType="next"
          />
        ))}
      </View>
    </View>
  );
};

export default CodeInput;
