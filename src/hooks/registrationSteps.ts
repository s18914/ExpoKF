export const REGISTRATION_STEPS = {
  "/registration/login": 1,
  "/registration/data-verification": 2,
  "/registration/set-pin": 3,
  "/registration/set-biometry": 4,
  "/registration/set-transaction-confirmation": 5,
  "/registration/event-notifications": 6,
} as const;

export const STEP_TO_PATH = {
  1: "/registration/login",
  2: "/registration/data-verification",
  3: "/registration/set-pin",
  4: "/registration/set-biometry",
  5: "/registration/set-transaction-confirmation",
  6: "/registration/event-notifications",
} as const;

export type RegistrationPath = keyof typeof REGISTRATION_STEPS;
export type RegistrationStep = (typeof REGISTRATION_STEPS)[RegistrationPath];

export const getStepFromPath = (pathname: string): RegistrationStep => {
  const normalizedPath =
    pathname.split("?")[0].replace(/\/$/, "") || "/registration";
  return REGISTRATION_STEPS[normalizedPath as RegistrationPath] ?? 1;
};

export const getPathFromStep = (step: RegistrationStep): RegistrationPath => {
  return STEP_TO_PATH[step] ?? "/registration/event-notifications";
};

export const isRegistrationPath = (pathname: string): boolean => {
  const normalizedPath =
    pathname.split("?")[0].replace(/\/$/, "") || "/registration";
  return normalizedPath.startsWith("/registration");
};

export const getMaxStep = (): number => {
  return Math.max(...Object.values(REGISTRATION_STEPS));
};

export const getStepMapping = (hasBiometry: boolean) => {
  if (hasBiometry) {
    return {
      1: "/registration/login",
      2: "/registration/data-verification", 
      3: "/registration/set-pin",
      4: "/registration/set-biometry",
      5: "/registration/set-transaction-confirmation",
      6: "/registration/event-notifications",
    };
  } else {
    // Pomijamy kroki biometrii
    return {
      1: "/registration/login",
      2: "/registration/data-verification",
      3: "/registration/set-pin", 
      4: "/registration/event-notifications",
    };
  }
};

export const getPathMapping = (hasBiometry: boolean) => {
  if (hasBiometry) {
    return {
      "/registration/login": 1,
      "/registration/data-verification": 2,
      "/registration/set-pin": 3,
      "/registration/set-biometry": 4,
      "/registration/set-transaction-confirmation": 5,
      "/registration/event-notifications": 6,
    };
  } else {
    return {
      "/registration/login": 1,
      "/registration/data-verification": 2,
      "/registration/set-pin": 3,
      "/registration/event-notifications": 4,
    };
  }
};

export const getMaxStepForBiometry = (hasBiometry: boolean): number => {
  return hasBiometry ? 6 : 4;
};

export const getStepFromPathWithBiometry = (pathname: string, hasBiometry: boolean): number => {
  const normalizedPath = pathname.split("?")[0].replace(/\/$/, "") || "/registration";
  const pathMapping = getPathMapping(hasBiometry);
  return pathMapping[normalizedPath as keyof typeof pathMapping] ?? 1;
};

export const getPathFromStepWithBiometry = (step: number, hasBiometry: boolean): string => {
  const stepMapping = getStepMapping(hasBiometry);
  return stepMapping[step as keyof typeof stepMapping] ?? "/registration/login";
};
