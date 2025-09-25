import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet, KeyboardTypeOptions } from "react-native";
import KfText from "../../components/common/KfText/KfText";
import KfInput from "../../components/common/KfInput/KfInput";
import { globalStyles } from "../../assets/styles/globalStyles";
import TileIcon from "../../components/common/TileIcon/TileIcon";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";

import AskSmall from "../../assets/icons/ask_small.jsx";
import InfoSmall from "../../assets/icons/info.jsx";
import KfRegistrationHeader from "../../components/composite/KfRegistrationHeader/KfRegistrationHeader";
import Notify from "../../components/common/Notify/Notify";

const DataVerification = () => {
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

          <KfInput
            keyboardType={"numeric"}
            placeholder={"Wpisz hasło"}
            label={"Kod z wiadomości SMS"}
            onChangeText={function (s: string): {} {
              throw new Error("Function not implemented.");
            }}
          />
          <KfText title="Kod SMS nie dotarł" type={10} />
        </View>
        <View
          style={[globalStyles.buttonsContainer, { gap: verticalScale(22) }]}
        >
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

export default DataVerification;
