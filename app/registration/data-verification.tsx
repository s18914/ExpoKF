import React, { useContext, useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import KfText from "../../components/common/KfText/KfText";
import KfInput from "../../components/common/KfInput/KfInput";
import { globalStyles } from "../../assets/styles/globalStyles";
import TileIcon from "../../components/common/TileIcon/TileIcon";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";

import KfRegistrationHeader from "../../components/composite/KfRegistrationHeader/KfRegistrationHeader";
import Notify from "../../components/common/Notify/Notify";
import CodeInput from "../../components/common/CodeInput/CodeInput";
import BottomDrawer from "../../components/common/BottomDrawer/BottomDrawer";
import SmsCodeDrawer from "../../components/drawers/SmsCodeDrawer";
import { RegistrationContext } from "./_layout";

const DataVerification = () => {
  const [visible, setVisible] = useState(false);
  const [pesel, setPesel] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [activeField, setActiveField] = useState<"pesel" | "sms" | null>(null);
  const regContext = useContext(RegistrationContext);
  const goToNextStep = () => {
    regContext.goToNextStep();
  };
  return (
    <>
      <KfRegistrationHeader />
      <View style={globalStyles.content}>
        <View style={{ flexGrow: 1 }}>
          <TileIcon icon="user" color="light-green" />
          <KfText title="Weryfikacja danych" type={1} />
          <KfText
            title="To Twoje pierwsze logowanie do aplikacji, dlatego musimy potwierdzić Twoje dane."
            type={6}
          />

          <View
            style={{
              marginTop: verticalScale(10),
              marginBottom: verticalScale(30),
            }}
          >
            <Notify text="Na Twój numer telefonu została wysłana&nbsp;wiadomość z kodem SMS." />
          </View>

          <KfInput
            keyboardType={"numeric"}
            placeholder={"Podaj numer PESEL"}
            label={"Numer PESEL"}
            value={pesel}
            onChangeText={setPesel}
            onFocus={() => setActiveField("pesel")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "pesel"}
          />

          <CodeInput
            label={"Kod z wiadomości SMS"}
            value={smsCode}
            onChange={setSmsCode}
            onFocus={() => setActiveField("sms")}
            onBlur={() => setActiveField(null)}
            isActive={activeField === "sms"}
          />

          <Pressable onPress={() => setVisible(true)}>
            <KfText title="Kod SMS nie dotarł" type={10} />
          </Pressable>

          <BottomDrawer visible={visible} onClose={() => setVisible(false)}>
            <SmsCodeDrawer />
          </BottomDrawer>
        </View>
        <View style={[globalStyles.buttonsContainer]}>
          <KfButton
            title={"Dalej"}
            type={KFButtonTypes.Gradient}
            icon="arrow"
            onPress={goToNextStep}
          />
        </View>
      </View>
    </>
  );
};

export default DataVerification;
