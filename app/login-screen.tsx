import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
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

    initializeBiometry();
  }, []);

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => setKeyboardHeight(e.endCoordinates.height)
    );
    const hideSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardHeight(0)
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
      <View style={[globalStyles.content, styles.content]}>
        <View style={{ flexGrow: 1 }}>
          <TileIcon icon="badge_lock" color="light-green" />
          <KfText title="Witaj ponownie!" type={1} />
          <KfText
            title="Podaj kod PIN, aby zalogować się do aplikacji."
            type={6}
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
                    title={biometryInfo?.displayName || "Logowanie biometryczne"}
                    type={7}
                  />
                </>
              )}
            </TouchableOpacity>
          )}

          {/* PIN Code Input */}
          <CodeInput
            label="Kod PIN"
            value={pin}
            onChange={handlePinChange}
            onFocus={() => setIsCodeFocused(true)}
            onBlur={() => setIsCodeFocused(false)}
            isActive={isCodeFocused}
          />

          {/* Error Message */}
          {error && (
            <KfText
              title={error}
              type={6}
              color="#FF3B30"
              otherStyles={{ marginTop: verticalScale(8) }}
            />
          )}

          <KfText
            title="Nie pamiętam kodu PIN"
            type={10}
            otherStyles={{ marginTop: verticalScale(16) }}
          />
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
    paddingHorizontal: horizontalScale(25),
    paddingBottom: verticalScale(20),
    paddingTop: verticalScale(16),
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
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
