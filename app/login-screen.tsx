import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Pressable,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import KfText from "../components/common/KfText/KfText";
import CodeInput from "../components/common/CodeInput/CodeInput";
import TileIcon from "../components/common/TileIcon/TileIcon";
import { globalStyles } from "../assets/styles/globalStyles";
import { horizontalScale, verticalScale } from "../assets/styles/scaling";
import {
  getPin,
  getBiometryInfo,
  getRegistrationSettings,
  BiometryType,
} from "../src/services/registrationStorage";
import AskSmall from "../assets/icons/ask_small";
import InfoSmall from "../assets/icons/info";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import LogoKfIcon from "../assets/icons/logo_kf";
import BottomDrawer from "../components/common/BottomDrawer/BottomDrawer";
import ForgotPinDrawer from "../components/drawers/ForgotPinDrawer";

interface BiometryInfoType {
  isAvailable: boolean;
  type: string;
  displayName: string;
  icon: string;
}

const LoginScreen = () => {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [biometryInfo, setBiometryInfo] = useState<any>(null);
  const [showBiometryButton, setShowBiometryButton] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const initializeBiometry = async () => {
      try {
        const biometry = await getBiometryInfo();
        const settings = await getRegistrationSettings();

        setBiometryInfo(biometry);

        if (biometry.isAvailable && settings?.biometryLoginEnabled) {
          setShowBiometryButton(true);
          // Automatyczne logowanie biometrią
          setTimeout(() => {
            handleBiometricLogin();
          }, 500);
        }
      } catch (err) {
        console.error("Error initializing biometry:", err);
      }
    };

    //initializeBiometry();
  }, []);

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => setKeyboardHeight(e.endCoordinates.height),
    );
    const hideSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardHeight(0),
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleBiometricLogin = async () => {
    if (isAuthenticating) return;

    setIsAuthenticating(true);
    try {
      const result = await LocalAuthentication.authenticateAsync({
        disableDeviceFallback: false,
      });

      if (result.success) {
        // Biometria się powiodła, przejdź do aplikacji
        router.replace("/application");
      } else {
        setError("Logowanie biometryczne nie powiodło się");
      }
    } catch (err) {
      console.error("Biometric authentication error:", err);
      setError("Błąd podczas logowania biometrią");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const validatePin = async (pinValue: string) => {
    if (pinValue.length === 6) {
      try {
        const storedPin = await getPin();
        if (storedPin === pinValue) {
          setError("");
          router.replace("/application");
        } else {
          setError("Niepoprawny kod PIN");
          setPin("");
        }
      } catch (err) {
        console.error("Error validating PIN:", err);
        setError("Błąd podczas weryfikacji PIN");
      }
    }
  };

  const handlePinChange = (value: string) => {
    setPin(value);
    setError("");
    validatePin(value);
  };

  return (
    <View style={globalStyles.container}>
      <Svg
        width={"130%"}
        height={500}
        style={{ position: "absolute", top: -270 }}
      >
        <Defs>
          <RadialGradient id="grad" cx="50%" cy="22%" r="60%" fx="50%" fy="50%">
            <Stop offset="0" stopColor="rgb(111, 219, 64)" />
            <Stop offset="1" stopColor="rgba(255, 255, 255)" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="-40" width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      <View style={{ alignSelf: "center" }}>
        <LogoKfIcon width={horizontalScale(165)} height={verticalScale(45)} />
      </View>

      <View style={[globalStyles.content, styles.content]}>
        <View style={{ flexGrow: 1 }}>
          <TileIcon icon="badge_lock" color="light-green" />
          <KfText
            title="Witaj ponownie!"
            type={1}
            otherStyles={{
              marginTop: verticalScale(10),
              paddingBottom: verticalScale(12),
            }}
          />
          <KfText
            title="Podaj kod PIN, aby zalogować się do aplikacji."
            type={5}
            otherStyles={{
              marginBottom: verticalScale(9),
            }}
          />

          {/* Biometry Button */}
          {showBiometryButton && biometryInfo?.isAvailable && (
            <TouchableOpacity
              style={styles.biometryButton}
              onPress={handleBiometricLogin}
              disabled={isAuthenticating}
            >
              {isAuthenticating ? (
                <ActivityIndicator size="small" color="#4ecf17" />
              ) : (
                <>
                  <View style={styles.biometryIcon}>
                    {biometryInfo?.type === "faceId" ? (
                      <TileIcon
                        icon="badge_lock"
                        color="light-green"
                        isSuperSmall
                      />
                    ) : (
                      <TileIcon
                        icon="badge_lock"
                        color="light-green"
                        isSuperSmall
                      />
                    )}
                  </View>
                  <KfText
                    title={
                      biometryInfo?.displayName || "Logowanie biometryczne"
                    }
                    type={7}
                  />
                </>
              )}
            </TouchableOpacity>
          )}

          <CodeInput
            label="Kod PIN"
            value={pin}
            onChange={handlePinChange}
            onFocus={() => setIsCodeFocused(true)}
            onBlur={() => setIsCodeFocused(false)}
            isActive={isCodeFocused}
          />

          {error && (
            <KfText
              title={error}
              type={6}
              color="#FF3B30"
              otherStyles={{ marginTop: verticalScale(8) }}
            />
          )}

          <Pressable onPress={() => setVisible(true)}>
            <KfText
              title="Nie pamiętam kodu PIN"
              type={10}
              otherStyles={{ fontFamily: "EuclidCircularM" }}
            />
          </Pressable>

          <BottomDrawer visible={visible} onClose={() => setVisible(false)}>
            <ForgotPinDrawer />
          </BottomDrawer>
        </View>

        {/* Footer with Help and Legal Info */}
        <View
          style={[
            styles.footer,
            isCodeFocused && { marginBottom: keyboardHeight },
          ]}
        >
          <View style={styles.footerLinks}>
            <TouchableOpacity style={styles.footerLink}>
              <AskSmall />
              <KfText title="Pomoc i kontakt" type={7} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerLink}>
              <InfoSmall />
              <KfText title="Informacja prawna" type={7} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 0,
    paddingTop: verticalScale(55),
  },
  biometryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: horizontalScale(12),
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
    borderRadius: 12,
    backgroundColor: "rgba(78, 207, 23, 0.1)",
    marginVertical: verticalScale(20),
    borderWidth: 1,
    borderColor: "rgba(78, 207, 23, 0.3)",
  },
  biometryIcon: {
    width: verticalScale(40),
    height: verticalScale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    paddingBottom: verticalScale(20),
    paddingTop: verticalScale(16),
  },
  footerLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(6),
  },
});

export default LoginScreen;
