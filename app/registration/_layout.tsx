import { Slot } from "expo-router";
import { createContext, useEffect } from "react";
import { BackHandler, ScrollView } from "react-native";
import KfRegistrationHeader from "../../components/composite/KfRegistrationHeader/KfRegistrationHeader";
import useRegistrationStep from "../hooks/useRegistrationStep";
import { RegistrationStep } from "../hooks/registrationSteps";

export type RegistrationContextModel = {
  step: RegistrationStep;
  goToStep: (step: RegistrationStep) => void;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
};

export const RegistrationContext = createContext<RegistrationContextModel>(
  {} as RegistrationContextModel
);

export default function Layout() {
  const { step, goToStep, goToPreviousStep, goToNextStep, isRegistrationPath } =
    useRegistrationStep();

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
        value={{ step, goToStep, goToPreviousStep, goToNextStep }}
      >
        <Slot />
      </RegistrationContext.Provider>
    </ScrollView>
  );
}
