import { Slot, useRouter } from "expo-router";
import { createContext, useEffect, useState } from "react";
import { BackHandler, ScrollView } from "react-native";
import KfRegistrationHeader from "../../components/composite/KfRegistrationHeader/KfRegistrationHeader";
import useRegistrationStep from "../../src/hooks/useRegistrationStep";
import { RegistrationStep } from "../../src/hooks/registrationSteps";
import { 
  getBiometryInfo, 
  BiometryInfo, 
  savePin, 
  saveBiometryLoginEnabled, 
  saveBiometryTransactionEnabled, 
  saveNotificationsEnabled,
  saveBiometryAvailable 
} from "../../src/services/registrationStorage";

export type RegistrationContextModel = {
  step: RegistrationStep;
  goToStep: (step: RegistrationStep) => void;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  // Dane rejestracji
  pin: string;
  setPin: (pin: string) => void;
  biometryInfo: BiometryInfo | null;
  biometryLoginEnabled: boolean;
  setBiometryLoginEnabled: (enabled: boolean) => void;
  biometryTransactionEnabled: boolean;
  setBiometryTransactionEnabled: (enabled: boolean) => void;
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
  // Funkcje pomocnicze
  completeRegistration: () => Promise<void>;
};

export const RegistrationContext = createContext<RegistrationContextModel>(
  {} as RegistrationContextModel
);

export default function Layout() {
  const router = useRouter();
  const { step, goToStep, goToPreviousStep, goToNextStep, isRegistrationPath } =
    useRegistrationStep();
  
  // Stan danych rejestracji
  const [pin, setPin] = useState<string>("");
  const [biometryInfo, setBiometryInfo] = useState<BiometryInfo | null>(null);
  const [biometryLoginEnabled, setBiometryLoginEnabled] = useState<boolean>(false);
  const [biometryTransactionEnabled, setBiometryTransactionEnabled] = useState<boolean>(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);

  // Sprawdzenie dostępności biometrii przy montowaniu
  useEffect(() => {
    const checkBiometry = async () => {
      const info = await getBiometryInfo();
      setBiometryInfo(info);
      await saveBiometryAvailable(info.isAvailable);
    };
    checkBiometry();
  }, []);

  // Funkcja zapisująca wszystkie dane i kończąca rejestrację
  const completeRegistration = async () => {
    try {
      // Zapisz wszystkie dane
      await savePin(pin);
      await saveBiometryLoginEnabled(biometryLoginEnabled);
      await saveBiometryTransactionEnabled(biometryTransactionEnabled);
      await saveNotificationsEnabled(notificationsEnabled);
      
      // Przekieruj do aplikacji
      router.replace("/application");
    } catch (error) {
      console.error("Error completing registration:", error);
      // Możesz tu dodać obsługę błędów, np. pokazanie alertu
    }
  };

  // Obsługa gestu wstecz w telefonie (Android)
  useEffect(() => {
    if (!isRegistrationPath) return;

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (step > 1) {
          goToPreviousStep();
          return true; // Prevent default behavior
        }
        return false; // Allow default behavior (exit app)
      }
    );

    return () => backHandler.remove();
  }, [step, isRegistrationPath, goToPreviousStep]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <RegistrationContext.Provider
        value={{ 
          step, 
          goToStep, 
          goToPreviousStep, 
          goToNextStep,
          pin,
          setPin,
          biometryInfo,
          biometryLoginEnabled,
          setBiometryLoginEnabled,
          biometryTransactionEnabled,
          setBiometryTransactionEnabled,
          notificationsEnabled,
          setNotificationsEnabled,
          completeRegistration,
        }}
      >
        <Slot />
      </RegistrationContext.Provider>
    </ScrollView>
  );
}
