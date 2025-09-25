import React, { useState } from "react";
import { View } from "react-native";
import KfText from "../../components/common/KfText/KfText";
import { globalStyles } from "../../assets/styles/globalStyles";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";

import BottomDrawer from "../../components/common/BottomDrawer/BottomDrawer";

const SmsCodeDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <KfText title="Brak kodu SMS" type={2} />
      <KfText title="Kod SMS nie dotarł?" type={3} />

      <KfText
        title="Jeśli minęły 2 minuty, a kod SMS nie dotarł, możesz spróbować wysłać kod ponownie."
        type={6}
      />
      <View style={[globalStyles.buttonsContainer]}>
        <KfButton
          title={"Wyślij kod ponownie"}
          type={KFButtonTypes.Gradient}
          icon="reset"
        />
      </View>

      <KfText title="Nie mam dostępu do telefonu" type={3} />

      <KfText
        title="Zaloguj się na swoje konto w serwisie internetowym KupFundusz.pl i zaktualizuj numer telefonu lub skontaktuj się z nami. "
        type={6}
      />
      <KfText title="Potrzebujesz pomocy? " type={3} />
    </>
  );
};

export default SmsCodeDrawer;
