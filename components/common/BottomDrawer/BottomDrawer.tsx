import React from "react";
import { Modal, View, TouchableOpacity, StyleSheet } from "react-native";

interface BottomDrawerProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({
  visible,
  onClose,
  children,
}) => (
  <Modal
    visible={visible}
    animationType="slide"
    transparent
    onRequestClose={onClose}
  >
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={onClose}
    />
    <View style={styles.sheet}>{children}</View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 24,
    minHeight: 320,
    elevation: 8,
  },
});

export default BottomDrawer;
