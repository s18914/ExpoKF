import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import KfText from "../../components/common/KfText/KfText";
import KfSwitch from "../../components/common/KfSwitch/KfSwitch";
import ArrowIcon from "../../assets/icons/arrow_icon";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import KfHeader from "../../components/common/Header/Header";

interface BiometricsScreenProps {
  onBack: () => void;
  onChangePinPress: () => void;
}

const BiometricsScreen: React.FC<BiometricsScreenProps> = ({
  onBack,
  onChangePinPress,
}) => {
  const [biometricLogin, setBiometricLogin] = useState(false);
  const [biometricConfirmation, setBiometricConfirmation] = useState(false);

  return (
      <View style={styles.content}>
        <KfHeader title="Biometria i kod PIN" onBack={onBack} />

        <View style={styles.section}>
          <View style={styles.switchRow}>
            <View style={styles.textContainer}>
              <KfText title="Logowanie biometryczne" type={40} />
              <KfText
                title="Logowanie do aplikacji za pomocą FaceID/TouchID jest teraz włączone."
                type={20}
                color="#8E8E93"
                otherStyles={styles.description}
              />
            </View>
            <KfSwitch
              value={biometricLogin}
              onValueChange={setBiometricLogin}
            />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.switchRow}>
            <View style={styles.textContainer}>
              <KfText title="Potwierdzanie zleceń biometrią" type={40} />
              <KfText
                title="Potwierdzanie zleceń za pomocą FaceID/TouchID jest teraz wyłączone."
                type={20}
                color="#8E8E93"
                otherStyles={styles.description}
              />
            </View>
            <KfSwitch
              value={biometricConfirmation}
              onValueChange={setBiometricConfirmation}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.changePinButton}
          activeOpacity={0.7}
          onPress={onChangePinPress}
        >
          <KfText title="Zmiana kodu PIN do aplikacji" type={40} />
          <ArrowIcon
            fill="#1F2225"
          />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  section: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(25),
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: horizontalScale(15),
  },
  textContainer: {
    flex: 1,
    gap: verticalScale(8),
  },
  description: {
    fontFamily: "EuclidCircularR",
    lineHeight: scaleFontSize(19),
  },
  changePinButton: {
    paddingHorizontal: horizontalScale(25),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(20),
  },
});

export default BiometricsScreen;
