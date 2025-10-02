// Mapowanie ścieżek rejestracji do kroków
export const REGISTRATION_STEPS = {
  '/registration': 0,
  '/registration/login': 1,
  '/registration/data-verification': 2,
  '/registration/set-pin': 3,
} as const;

// Odwrotne mapowanie - z kroku do ścieżki
export const STEP_TO_PATH = {
  0: '/registration',
  1: '/registration/login', 
  2: '/registration/data-verification',
  3: '/registration/set-pin',
} as const;

export type RegistrationPath = keyof typeof REGISTRATION_STEPS;
export type RegistrationStep = typeof REGISTRATION_STEPS[RegistrationPath];

export const getStepFromPath = (pathname: string): RegistrationStep => {
  const normalizedPath = pathname.split('?')[0].replace(/\/$/, '') || '/registration';
  return REGISTRATION_STEPS[normalizedPath as RegistrationPath] ?? 0;
};

export const getPathFromStep = (step: RegistrationStep): RegistrationPath => {
  return STEP_TO_PATH[step] ?? '/registration';
};

export const isRegistrationPath = (pathname: string): boolean => {
  const normalizedPath = pathname.split('?')[0].replace(/\/$/, '') || '/registration';
  return normalizedPath.startsWith('/registration');
};

export const getMaxStep = (): number => {
  return Math.max(...Object.values(REGISTRATION_STEPS));
};
