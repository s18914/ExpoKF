import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  Animated,
} from "react-native";
import { verticalScale } from "../../../assets/styles/scaling";

interface BottomDrawerProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({
  visible,
  onClose,
  children,
}) => {
  const slideAnim = React.useRef(new Animated.Value(0)).current;
  const opacityAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      // Cień pojawia się od razu
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }).start();
      
      // Drawer animuje się z dołu
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Drawer chowa się w dół
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Cień znika po zakończeniu animacji drawer
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [visible, slideAnim, opacityAnim]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0],
  });

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onClose}
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.container}>
        <Animated.View style={[styles.overlay, { opacity: opacityAnim }]}>
          <TouchableOpacity
            style={styles.overlayTouchable}
            activeOpacity={1}
            onPress={onClose}
          />
        </Animated.View>
        <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
          <Pressable 
            style={styles.close} 
            onPress={onClose}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Image source={require("../../../assets/images/close.png")} />
          </Pressable>

          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.32)",
  },
  overlayTouchable: {
    flex: 1,
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: verticalScale(24),
    minHeight: 320,
    elevation: 8,
  },
  close: {
    position: "absolute",
    top: verticalScale(16),
    right: verticalScale(16),
    zIndex: 10,
    padding: 8,
  },
});

export default BottomDrawer;
