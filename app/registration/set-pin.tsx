import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import KfText from "../../components/common/KfText/KfText";
import { globalStyles } from "../../assets/styles/globalStyles";
import TileIcon from "../../components/common/TileIcon/TileIcon";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";

import KfRegistrationHeader from "../../components/composite/KfRegistrationHeader/KfRegistrationHeader";
import CodeInput from "../../components/common/CodeInput/CodeInput";
import { RegistrationContext } from "./_layout";

const SetPin = () => {
  const regContext = useContext(RegistrationContext);
  const [pinFirst, setPinFirst] = useState("");
  const [pinSecond, setPinSecond] = useState("");
  const [activeField, setActiveField] = useState<"pin" | "pin2" | null>(null);
  const [error, setError] = useState<string>("");

  // Przywróć zapisany PIN przy cofaniu się do tego ekranu
  useEffect(() => {
    if (regContext.pin && regContext.pin.length === 6) {
      setPinFirst(regContext.pin);
      setPinSecond(regContext.pin);
    }
  }, []);

  // Sprawdzenie czy PINy są identyczne i mają 6 cyfr
  const isPinValid = pinFirst.length === 6 && pinSecond.length === 6 && pinFirst === pinSecond;

  const handleContinue = () => {
    if (pinFirst.length !== 6 || pinSecond.length !== 6) {
      setError("Kod PIN musi składać się z 6 cyfr");
      return;
    }
    
    if (pinFirst !== pinSecond) {
      setError("Podane kody PIN nie są identyczne");
      return;
    }

    // Zapisz PIN w kontekście
    regContext.setPin(pinFirst);
    
    // Przejdź do następnego kroku (biometria lub powiadomienia jeśli brak biometrii)
    if (regContext.biometryInfo?.isAvailable) {
      regContext.goToNextStep();
    } else {
      // Pomiń kroki biometrii i idź do powiadomień
      regContext.goToStep(6); // Krok 6 to event-notifications
    }
  };

  return (
    <>
      <KfRegistrationHeader />
      <View style={globalStyles.content}>
        <View style={{ flexGrow: 1 }}>
          <TileIcon icon="locker" color="light-green" />
          <KfText title="Ustaw kod PIN" type={1} />
          <KfText
            title="Kod PIN musi się składać z 6 cyfr i będzie służył do logowania do aplikacji."
            type={6}
          />

          <CodeInput
            label="Kod PIN (6 cyfr)"
            value={pinFirst}
            onChange={(value) => {
              setPinFirst(value);
              setError("");
            }}
            onFocus={() => setActiveField("pin")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "pin"}
          />

          <CodeInput
            label="Powtórz kod PIN"
            value={pinSecond}
            onChange={(value) => {
              setPinSecond(value);
              setError("");
            }}
            onFocus={() => setActiveField("pin2")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "pin2"}
          />
          
          {error ? (
            <KfText
              title={error}
              type={6}
              color="#FF3B30"
              otherStyles={{ marginTop: 8 }}
            />
          ) : null}
        </View>
        <View style={[globalStyles.buttonsContainer]}>
          <KfButton
            title={"Dalej"}
            type={KFButtonTypes.Gradient}
            icon="arrow"
            onPress={handleContinue}
            isDisabled={!isPinValid}
          />
        </View>
      </View>
    </>
  );
};

export default SetPin;
