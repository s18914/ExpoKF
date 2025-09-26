import { useRouter } from "expo-router";
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
import SmsCodeInput from "../../components/common/CodeInput/CodeInput";
import BottomDrawer from "../../components/common/BottomDrawer/BottomDrawer";
import SmsCodeDrawer from "../../components/drawers/SmsCodeDrawer";
import { RegistrationContext } from "./_layout";

const DataVerification = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const regContext = useContext(RegistrationContext);
  const goToNextStep = () => {
    router.push("/registration/set-pin");
    regContext.updateStep(3);
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
            onChangeText={function (s: string): {} {
              throw new Error("Function not implemented.");
            }}
          />

          <SmsCodeInput
            label={"Kod z wiadomości SMS"}
            value={""}
            onChange={() => {}}
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
