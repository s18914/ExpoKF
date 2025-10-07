import React, { useContext, useState } from "react";
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
  const [pin, setPin] = useState("");
  const [pin2, setPin2] = useState("");
  const [activeField, setActiveField] = useState<"pin" | "pin2" | null>(null);

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
            value={pin}
            onChange={setPin}
            onFocus={() => setActiveField("pin")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "pin"}
          />

          <CodeInput
            label="Powtórz kod PIN"
            value={pin2}
            onChange={setPin2}
            onFocus={() => setActiveField("pin2")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "pin2"}
          />
        </View>
        <View style={[globalStyles.buttonsContainer]}>
          <KfButton
            title={"Dalej"}
            type={KFButtonTypes.Gradient}
            icon="arrow"
            onPress={() => regContext.goToNextStep()}
          />
        </View>
      </View>
    </>
  );
};

export default SetPin;
