import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import KfText from "../../components/common/KfText/KfText";
import {
  horizontalScale,
} from "../../assets/styles/scaling";
import KfHeader from "../../components/common/Header/Header";
import TileIcon from "../../components/common/TileIcon/TileIcon";
import CodeInput from "../../components/common/CodeInput/CodeInput";
import { globalStyles } from "../../assets/styles/globalStyles";
import KfButton, { KFButtonTypes } from "../../components/common/KfButton/KfButton";

interface ChangePinScreenProps {
  onBack: () => void;
}

const ChangePinScreen: React.FC<ChangePinScreenProps> = ({ onBack }) => {
    const [pin, setPin] = useState("");
    const [pin2, setPin2] = useState("");
    const [activeField, setActiveField] = useState<"pin" | "pin2" | null>(null);
  
  return (
      <View style={styles.content}>
        
        <KfHeader title="Zmiana kodu PIN do aplikacji" onBack={onBack} />

        {/* Content Area - To be implemented */}
        <View style={styles.contentArea}>
          <TileIcon icon="locker" color="light-green" />
          <KfText title="Ustaw nowy kod PIN" type={1} />
          <KfText
            title="Kod PIN musi się składać z 6 cyfr i będzie służył do logowania do aplikacji."
            type={6}
          />

          <CodeInput
            label="Obecny kod PIN (6 cyfr)"
            value={pin}
            onChange={setPin}
            onFocus={() => setActiveField("pin")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "pin"}
          />

          <CodeInput
            label="Wpisz nowy kod PIN"
            value={pin2}
            onChange={setPin2}
            onFocus={() => setActiveField("pin2")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "pin2"}
          />

          <CodeInput
            label="Powtórz nowy kod PIN"
            value={pin2}
            onChange={setPin2}
            onFocus={() => setActiveField("pin2")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "pin2"}
          />
          
        </View>
        <View style={[globalStyles.buttonsContainer, {padding: horizontalScale(25)}]}>
          <KfButton
            title={"Dalej"}
            type={KFButtonTypes.Gradient}
            icon="arrow"
            //onPress={() => regContext.goToNextStep()}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentArea: {
    flex: 1,
    
    padding: horizontalScale(25),
  },
});

export default ChangePinScreen;
