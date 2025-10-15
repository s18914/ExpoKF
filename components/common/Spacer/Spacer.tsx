import React from "react";
import { View, StyleSheet } from "react-native";

interface SpacerProps {}

const Spacer: React.FC<SpacerProps> = () => {
  return <View style={styles.spacer}></View>;
};

const styles = StyleSheet.create({
  spacer: {
    flex: 1,
  },
});

export default Spacer;
