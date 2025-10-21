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
  return STEP_TO_PATH[step] ?? "/registration";
};

export const isRegistrationPath = (pathname: string): boolean => {
  const normalizedPath =
    pathname.split("?")[0].replace(/\/$/, "") || "/registration";
  return normalizedPath.startsWith("/registration");
};

export const getMaxStep = (): number => {
  return Math.max(...Object.values(REGISTRATION_STEPS));
};
