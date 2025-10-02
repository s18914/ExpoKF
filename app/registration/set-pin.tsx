import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import KfText from "../../components/common/KfText/KfText";
import { globalStyles } from "../../assets/styles/globalStyles";
import TileIcon from "../../components/common/TileIcon/TileIcon";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";

import KfRegistrationHeader from "../../components/composite/KfRegistrationHeader/KfRegistrationHeader";
import SmsCodeInput from "../../components/common/CodeInput/CodeInput";

const SetPin = () => {
  const [visible, setVisible] = useState(false);
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

          <SmsCodeInput
            label={"Kod PIN (6 cyfr)"}
            value={""}
            onChange={() => {}}
          />

          <SmsCodeInput
            label={"Powtórz kod PIN"}
            value={""}
            onChange={() => {}}
          />
        </View>
        <View style={[globalStyles.buttonsContainer]}>
          <KfButton
            title={"Dalej"}
            type={KFButtonTypes.Gradient}
            icon="arrow"
          />
        </View>
      </View>
    </>
  );
};

export default SetPin;
