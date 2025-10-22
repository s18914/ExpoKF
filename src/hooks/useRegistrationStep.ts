import { useEffect, useState } from "react";
import { useRouter, usePathname } from "expo-router";
import {
  getStepFromPath,
  getPathFromStep,
  isRegistrationPath,
  getMaxStep,
  getStepFromPathWithBiometry,
  getPathFromStepWithBiometry,
  getMaxStepForBiometry,
  RegistrationStep,
} from "./registrationSteps";

const useRegistrationStep = (hasBiometry?: boolean) => {
  const router = useRouter();
  const pathname = usePathname();
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (isRegistrationPath(pathname)) {
      if (hasBiometry !== undefined) {
        const currentStep = getStepFromPathWithBiometry(pathname, hasBiometry);
        setStep(currentStep);
      } else {
        const currentStep = getStepFromPath(pathname);
        setStep(currentStep);
      }
    }
  }, [pathname, hasBiometry]);

  const goToStep = (targetStep: number) => {
    if (hasBiometry !== undefined) {
      const targetPath = getPathFromStepWithBiometry(targetStep, hasBiometry);
      router.push(targetPath);
    } else {
      const targetPath = getPathFromStep(targetStep as RegistrationStep);
      router.push(targetPath);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      goToStep(step - 1);
    }
  };

  const goToNextStep = () => {
    const maxStep = hasBiometry !== undefined 
      ? getMaxStepForBiometry(hasBiometry)
      : getMaxStep();
    
    if (step < maxStep) {
      goToStep(step + 1);
    }
  };

  const getMaxSteps = () => {
    return hasBiometry !== undefined 
      ? getMaxStepForBiometry(hasBiometry)
      : getMaxStep();
  };

  return {
    step,
    goToStep,
    goToPreviousStep,
    goToNextStep,
    getMaxSteps,
    isRegistrationPath: isRegistrationPath(pathname),
  };
};

export default useRegistrationStep;
