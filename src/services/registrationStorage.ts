import * as SecureStore from 'expo-secure-store';
import * as LocalAuthentication from 'expo-local-authentication';
import { Platform } from 'react-native';

// Klucze do SecureStore
const KEYS = {
  PIN: 'user_pin',
  BIOMETRY_LOGIN_ENABLED: 'biometry_login_enabled',
  BIOMETRY_TRANSACTION_ENABLED: 'biometry_transaction_enabled',
  NOTIFICATIONS_ENABLED: 'notifications_enabled',
  BIOMETRY_AVAILABLE: 'biometry_available',
};

// Typy biometrii
export enum BiometryType {
  NONE = 'none',
  TOUCH_ID = 'touchId',
  FACE_ID = 'faceId',
  FINGERPRINT = 'fingerprint', // Android
  IRIS = 'iris', // Android
  FACE = 'face', // Android
}

export interface BiometryInfo {
  isAvailable: boolean;
  type: BiometryType;
  displayName: string;
  icon: string;
}

// Wykrywanie dostępności i typu biometrii
export const getBiometryInfo = async (): Promise<BiometryInfo> => {
  try {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    
    if (!hasHardware || !isEnrolled) {
      return {
        isAvailable: false,
        type: BiometryType.NONE,
        displayName: 'Brak biometrii',
        icon: 'fingerprint',
      };
    }

    const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
    
    if (Platform.OS === 'ios') {
      // iOS - sprawdzamy Face ID vs Touch ID
      if (supportedTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
        return {
          isAvailable: true,
          type: BiometryType.FACE_ID,
          displayName: 'Face ID',
          icon: 'face_id',
        };
      } else if (supportedTypes.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
        return {
          isAvailable: true,
          type: BiometryType.TOUCH_ID,
          displayName: 'Touch ID',
          icon: 'fingerprint',
        };
      }
    } else {
      return {
        isAvailable: true,
        type: BiometryType.FINGERPRINT,
        displayName: 'Logowanie biometryczne',
        icon: 'fingerprint',
      };
    }

    return {
      isAvailable: false,
      type: BiometryType.NONE,
      displayName: 'Brak biometrii',
      icon: 'fingerprint',
    };
  } catch (error) {
    console.error('Error checking biometry:', error);
    return {
      isAvailable: false,
      type: BiometryType.NONE,
      displayName: 'Brak biometrii',
      icon: 'fingerprint',
    };
  }
};

// Zapisywanie PIN-u
export const savePin = async (pin: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(KEYS.PIN, pin);
  } catch (error) {
    console.error('Error saving PIN:', error);
    throw new Error('Nie udało się zapisać PIN-u');
  }
};

// Pobieranie PIN-u
export const getPin = async (): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync(KEYS.PIN);
  } catch (error) {
    console.error('Error getting PIN:', error);
    return null;
  }
};

// Zapisywanie preferencji biometrii logowania
export const saveBiometryLoginEnabled = async (enabled: boolean): Promise<void> => {
  try {
    await SecureStore.setItemAsync(KEYS.BIOMETRY_LOGIN_ENABLED, enabled.toString());
  } catch (error) {
    console.error('Error saving biometry login preference:', error);
  }
};

// Zapisywanie preferencji biometrii transakcji
export const saveBiometryTransactionEnabled = async (enabled: boolean): Promise<void> => {
  try {
    await SecureStore.setItemAsync(KEYS.BIOMETRY_TRANSACTION_ENABLED, enabled.toString());
  } catch (error) {
    console.error('Error saving biometry transaction preference:', error);
  }
};

// Zapisywanie preferencji powiadomień
export const saveNotificationsEnabled = async (enabled: boolean): Promise<void> => {
  try {
    await SecureStore.setItemAsync(KEYS.NOTIFICATIONS_ENABLED, enabled.toString());
  } catch (error) {
    console.error('Error saving notifications preference:', error);
  }
};

// Zapisywanie informacji o dostępności biometrii
export const saveBiometryAvailable = async (available: boolean): Promise<void> => {
  try {
    await SecureStore.setItemAsync(KEYS.BIOMETRY_AVAILABLE, available.toString());
  } catch (error) {
    console.error('Error saving biometry availability:', error);
  }
};

// Pobieranie wszystkich ustawień
export const getRegistrationSettings = async () => {
  try {
    const [pin, biometryLogin, biometryTransaction, notifications, biometryAvailable] = await Promise.all([
      SecureStore.getItemAsync(KEYS.PIN),
      SecureStore.getItemAsync(KEYS.BIOMETRY_LOGIN_ENABLED),
      SecureStore.getItemAsync(KEYS.BIOMETRY_TRANSACTION_ENABLED),
      SecureStore.getItemAsync(KEYS.NOTIFICATIONS_ENABLED),
      SecureStore.getItemAsync(KEYS.BIOMETRY_AVAILABLE),
    ]);

    return {
      pin,
      biometryLoginEnabled: biometryLogin === 'true',
      biometryTransactionEnabled: biometryTransaction === 'true',
      notificationsEnabled: notifications === 'true',
      biometryAvailable: biometryAvailable === 'true',
    };
  } catch (error) {
    console.error('Error getting registration settings:', error);
    return null;
  }
};

// Czyszczenie wszystkich danych (np. przy wylogowaniu)
export const clearRegistrationData = async (): Promise<void> => {
  try {
    await Promise.all([
      SecureStore.deleteItemAsync(KEYS.PIN),
      SecureStore.deleteItemAsync(KEYS.BIOMETRY_LOGIN_ENABLED),
      SecureStore.deleteItemAsync(KEYS.BIOMETRY_TRANSACTION_ENABLED),
      SecureStore.deleteItemAsync(KEYS.NOTIFICATIONS_ENABLED),
      SecureStore.deleteItemAsync(KEYS.BIOMETRY_AVAILABLE),
    ]);
  } catch (error) {
    console.error('Error clearing registration data:', error);
  }
};
