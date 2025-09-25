import { Slot } from "expo-router";
import { createContext, useState } from "react";
import KfRegistrationHeader from "../../components/composite/KfRegistrationHeader/KfRegistrationHeader";

export type RegistrationContextModel = {
  step: number;
  updateStep: (step: number) => void;
};

export const RegistrationContext = createContext<RegistrationContextModel>(
  {} as RegistrationContextModel
);

export default function Layout() {
  const [step, setStep] = useState(0);
  const updateStep = (newStep: number) => {
    console.log("Updating step to: ", newStep);
    setStep(newStep);
  };

  return (
    <RegistrationContext.Provider value={{ step, updateStep }}>
      <Slot />
    </RegistrationContext.Provider>
  );
}
