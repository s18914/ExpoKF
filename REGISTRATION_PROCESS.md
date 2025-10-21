# Proces Aktywacji Konta - Dokumentacja

## Przegląd
Kompletny proces rejestracji/aktywacji konta z walidacją PIN, wykrywaniem biometrii i zapisem preferencji użytkownika.

## Kolejność Ekranów

1. **login** (`/registration/login`)
   - Ekran logowania (wymaga API)

2. **data-verification** (`/registration/data-verification`)
   - Weryfikacja danych (wymaga API)

3. **set-pin** (`/registration/set-pin`)
   - Ustawienie 6-cyfrowego PIN-u
   - Walidacja: oba PINy muszą być identyczne
   - Komunikaty błędów:
     - "Kod PIN musi składać się z 6 cyfr"
     - "Podane kody PIN nie są identyczne"
   - Przycisk "Dalej" disabled dopóki PINy nie są poprawne
   - **Logika pomijania**: Jeśli urządzenie nie obsługuje biometrii → przejście do kroku 6

4. **set-biometry** (`/registration/set-biometry`)
   - Włączenie logowania biometrycznego
   - Dynamiczne dostosowanie UI:
     - **iOS Face ID**: tytuł "Logowanie Face ID", ikona `faceId`
     - **iOS Touch ID**: tytuł "Logowanie Touch ID", ikona `fingerprint`
     - **Android**: tytuł "Logowanie biometryczne", ikona `fingerprint`
   - Opcje: "Włącz [typ biometrii]" lub "Nie teraz"
   - **Pomijany jeśli brak biometrii**

5. **set-transaction-confirmation** (`/registration/set-transaction-confirmation`)
   - Włączenie potwierdzania transakcji biometrią
   - Analogiczne dostosowanie UI jak w kroku 4
   - Opcje: "Włącz [typ biometrii]" lub "Nie teraz"
   - **Pomijany jeśli brak biometrii**

6. **event-notifications** (`/registration/event-notifications`)
   - Włączenie powiadomień push
   - Ikona: `notificationPhone`
   - Opcje: "Włącz powiadomienia" lub "Nie teraz"
   - **Po tym kroku**: zapisanie wszystkich danych i przekierowanie do `/application`

## Architektura

### Główne Komponenty

#### `app/utils/registrationStorage.ts`
Helper do zarządzania danymi rejestracji:
- **Wykrywanie biometrii**: `getBiometryInfo()` - zwraca typ i dostępność
- **Bezpieczne przechowywanie**: używa `expo-secure-store`
- **Funkcje zapisu**:
  - `savePin(pin: string)`
  - `saveBiometryLoginEnabled(enabled: boolean)`
  - `saveBiometryTransactionEnabled(enabled: boolean)`
  - `saveNotificationsEnabled(enabled: boolean)`
  - `saveBiometryAvailable(available: boolean)`

#### `app/registration/_layout.tsx`
Rozszerzony `RegistrationContext` zawierający:
- Stan danych rejestracji (PIN, preferencje biometrii, powiadomienia)
- `biometryInfo` - informacje o dostępności i typie biometrii
- `completeRegistration()` - zapisuje wszystkie dane i przekierowuje do `/application`

#### `app/hooks/registrationSteps.ts`
Mapowanie kroków rejestracji:
- 6 kroków (1-6)
- Funkcje nawigacji: `goToStep()`, `goToNextStep()`, `goToPreviousStep()`

### Przepływ Danych

```
1. Montowanie _layout.tsx
   ↓
2. Sprawdzenie dostępności biometrii (getBiometryInfo)
   ↓
3. Zapisanie info o biometrii w kontekście
   ↓
4. Użytkownik przechodzi przez kroki
   ↓
5. Dane zapisywane w stanie kontekstu
   ↓
6. Na ostatnim ekranie: completeRegistration()
   ↓
7. Zapis wszystkich danych do SecureStore
   ↓
8. Przekierowanie do /application
```

## Testowanie Biometrii

### Tryb Uruchamiania
✅ Działa w standardowym trybie: `npx expo start`

### Emulator Android
1. Uruchom emulator
2. Settings → Security → Fingerprint
3. Dodaj odcisk palca w emulatorze
4. W aplikacji będzie dostępna opcja "Logowanie biometryczne"

### Emulator iOS
1. Uruchom symulator
2. Features → Face ID / Touch ID → Enrolled
3. W aplikacji będzie dostępna odpowiednia opcja (Face ID lub Touch ID)
4. Podczas testowania: Features → Face ID / Touch ID → Matching Face/Finger

### Fizyczny Telefon
Pełna natywna funkcjonalność - używa rzeczywistej biometrii urządzenia.

## Scenariusze Testowe

### Scenariusz 1: Urządzenie z Face ID (iOS)
1. Przejdź przez login i data-verification
2. Ustaw PIN (np. 123456, powtórz 123456)
3. Ekran biometrii: "Logowanie Face ID" z ikoną twarzy
4. Kliknij "Włącz Face ID"
5. Ekran transakcji: "Potwierdzanie transakcji Face ID"
6. Kliknij "Włącz Face ID"
7. Ekran powiadomień
8. Kliknij "Włącz powiadomienia"
9. Przekierowanie do /application

### Scenariusz 2: Urządzenie z Touch ID (iOS)
Analogicznie jak Scenariusz 1, ale z "Touch ID" i ikoną odcisku palca.

### Scenariusz 3: Android z biometrią
1. Przejdź przez login i data-verification
2. Ustaw PIN
3. Ekran biometrii: "Logowanie biometryczne" z ikoną odcisku palca
4. Dalej jak w Scenariuszu 1

### Scenariusz 4: Urządzenie bez biometrii
1. Przejdź przez login i data-verification
2. Ustaw PIN
3. **Automatyczne pominięcie** ekranów biometrii
4. Bezpośrednie przejście do powiadomień
5. Kliknij "Włącz powiadomienia" lub "Nie teraz"
6. Przekierowanie do /application

### Scenariusz 5: Walidacja PIN - błędne dane
1. Przejdź do set-pin
2. Wpisz PIN: 123456
3. Powtórz PIN: 654321
4. Przycisk "Dalej" jest disabled
5. Komunikat błędu: "Podane kody PIN nie są identyczne"
6. Popraw drugi PIN na 123456
7. Przycisk "Dalej" staje się aktywny

### Scenariusz 6: Użytkownik rezygnuje z opcji
1. Przejdź przez cały proces
2. Na każdym opcjonalnym ekranie klikaj "Nie teraz"
3. Wszystkie preferencje zapisane jako `false`
4. Przekierowanie do /application

## Zapisane Dane (SecureStore)

Po zakończeniu rejestracji w SecureStore znajdują się:
- `user_pin` - zahashowany PIN użytkownika
- `biometry_login_enabled` - "true" lub "false"
- `biometry_transaction_enabled` - "true" lub "false"
- `notifications_enabled` - "true" lub "false"
- `biometry_available` - "true" lub "false"

## Bezpieczeństwo

- PIN przechowywany w `expo-secure-store` (szyfrowane przechowywanie)
- Wszystkie preferencje również w SecureStore
- Brak przechowywania wrażliwych danych w AsyncStorage lub pamięci
- Walidacja po stronie klienta przed zapisem

## Dalszy Rozwój

### Możliwe Ulepszenia
- [ ] Dodanie wymagań do PIN (np. brak 111111, 123456)
- [ ] Integracja z rzeczywistym API
- [ ] Dodanie animacji przejść między ekranami
- [ ] Implementacja rzeczywistej autentykacji biometrycznej (nie tylko ustawienia)
- [ ] Dodanie możliwości zmiany PIN/biometrii w ustawieniach
- [ ] Obsługa błędów API z odpowiednimi komunikatami
- [ ] Dodanie progress bar pokazującego postęp rejestracji
