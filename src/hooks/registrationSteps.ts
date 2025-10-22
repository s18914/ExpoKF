export const REGISTRATION_STEPS = {
  "/activation/login": 1,
  "/activation/data-verification": 2,
  "/activation/set-pin": 3,
  "/activation/set-biometry": 4,
  "/activation/set-transaction-confirmation": 5,
  "/activation/event-notifications": 6,
} as const;

export const STEP_TO_PATH = {
  1: "/activation/login",
  2: "/activation/data-verification",
  3: "/activation/set-pin",
  4: "/activation/set-biometry",
  5: "/activation/set-transaction-confirmation",
  6: "/activation/event-notifications",
} as const;

export type RegistrationPath = keyof typeof REGISTRATION_STEPS;
export type RegistrationStep = (typeof REGISTRATION_STEPS)[RegistrationPath];

export const getStepFromPath = (pathname: string): RegistrationStep => {
  const normalizedPath =
    pathname.split("?")[0].replace(/\/$/, "") || "/activation";
  return REGISTRATION_STEPS[normalizedPath as RegistrationPath] ?? 1;
};

export const getPathFromStep = (step: RegistrationStep): RegistrationPath => {
  return STEP_TO_PATH[step] ?? "/activation/event-notifications";
};

export const isRegistrationPath = (pathname: string): boolean => {
  const normalizedPath =
    pathname.split("?")[0].replace(/\/$/, "") || "/activation";
  return normalizedPath.startsWith("/activation");
};

export const getMaxStep = (): number => {
  return Math.max(...Object.values(REGISTRATION_STEPS));
};

export const getStepMapping = (hasBiometry: boolean) => {
  if (hasBiometry) {
    return {
      1: "/activation/login",
      2: "/activation/data-verification", 
      3: "/activation/set-pin",
      4: "/activation/set-biometry",
      5: "/activation/set-transaction-confirmation",
      6: "/activation/event-notifications",
    };
  } else {
    // Pomijamy kroki biometrii
    return {
      1: "/activation/login",
      2: "/activation/data-verification",
      3: "/activation/set-pin", 
      4: "/activation/event-notifications",
    };
  }
};

export const getPathMapping = (hasBiometry: boolean) => {
  if (hasBiometry) {
    return {
      "/activation/login": 1,
      "/activation/data-verification": 2,
      "/activation/set-pin": 3,
      "/activation/set-biometry": 4,
      "/activation/set-transaction-confirmation": 5,
      "/activation/event-notifications": 6,
    };
  } else {
    return {
      "/activation/login": 1,
      "/activation/data-verification": 2,
      "/activation/set-pin": 3,
      "/activation/event-notifications": 4,
    };
  }
};

export const getMaxStepForBiometry = (hasBiometry: boolean): number => {
  return hasBiometry ? 6 : 4;
};

export const getStepFromPathWithBiometry = (pathname: string, hasBiometry: boolean): number => {
  const normalizedPath = pathname.split("?")[0].replace(/\/$/, "") || "/activation";
  const pathMapping = getPathMapping(hasBiometry);
  return pathMapping[normalizedPath as keyof typeof pathMapping] ?? 1;
};

export const getPathFromStepWithBiometry = (step: number, hasBiometry: boolean): string => {
  const stepMapping = getStepMapping(hasBiometry);
  return stepMapping[step as keyof typeof stepMapping] ?? "/activation/login";
};
