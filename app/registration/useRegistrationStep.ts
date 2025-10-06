import { useEffect, useState } from "react";
import { useRouter, usePathname } from "expo-router";
import {
  getStepFromPath,
  getPathFromStep,
  isRegistrationPath,
  getMaxStep,
  RegistrationStep,
} from "./registrationSteps";

const useRegistrationStep = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [step, setStep] = useState<RegistrationStep>(0);

  useEffect(() => {
    if (isRegistrationPath(pathname)) {
      const currentStep = getStepFromPath(pathname);
      setStep(currentStep);
    }
  }, [pathname]);

  const goToStep = (targetStep: RegistrationStep) => {
    const targetPath = getPathFromStep(targetStep);
    router.push(targetPath);
  };

  const goToPreviousStep = () => {
    if (step > 0) {
      goToStep((step - 1) as RegistrationStep);
    }
  };

  const goToNextStep = () => {
    const maxStep = getMaxStep();
    if (step < maxStep) {
      goToStep((step + 1) as RegistrationStep);
    }
  };

  return {
    step,
    goToStep,
    goToPreviousStep,
    goToNextStep,
    isRegistrationPath: isRegistrationPath(pathname),
  };
};

export default useRegistrationStep;
