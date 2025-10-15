import React, { useRef, useEffect } from "react";
import { TouchableOpacity, Animated, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../assets/styles/scaling";

interface KfSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
}

const KfSwitch: React.FC<KfSwitchProps> = ({
  value,
  onValueChange,
  activeColor = "#4ECF17",
  inactiveColor = "#A2A2A2",
}) => {
  const translateX = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 1 : 0,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();
  }, [value]);

  const handlePress = () => {
    onValueChange(!value);
  };

  const thumbTranslateX = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [horizontalScale(0), horizontalScale(17)],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.thumb,
          {
            backgroundColor: value ? activeColor : inactiveColor,
            transform: [{ translateX: thumbTranslateX }],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(55),
    height: verticalScale(35),
    borderRadius: horizontalScale(18),
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D4D4D4",
    padding: horizontalScale(4),
  },
  thumb: {
    width: verticalScale(28),
    height: verticalScale(27),
    borderRadius: horizontalScale(15),
    
  },
});

export default KfSwitch;
