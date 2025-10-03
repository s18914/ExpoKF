import { useContext, useEffect, useState } from "react";
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
import { RegistrationContext } from "./_layout";

const Login = () => {
  const regContext = useContext(RegistrationContext);
  const [clientNumber, setClientNumber] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  
  const goToNextStep = () => {
    // Mockup błędu - jeśli hasło jest krótsze niż 6 znaków
    if (password.length < 6) {
      setHasError(true);
      return;
    }
    setHasError(false);
    regContext.goToNextStep();
  };

  return (
    <>
      <KfRegistrationHeader />
      <View style={globalStyles.content}>
        <View style={{ flexGrow: 1 }}>
          <TileIcon icon="badge_lock" color="light-green" />
          <KfText title="Pierwsze logowanie" type={1} />
          <KfText
            title="Wprowadź dane do logowania powiązane z Twoim kontem na KupFundusz.pl"
            type={6}
          />

          <KfInput
            keyboardType={"default"}
            placeholder={"Wpisz numer klienta"}
            label={"Numer klienta (8-cyfrowy)"}
            value={clientNumber}
            onChangeText={setClientNumber}
            tooltipMessage="Numer klienta znajdziesz w umowie lub na stronie KupFundusz.pl w sekcji 'Moje konto'."
          />
          <KfText
            title="Nie pamiętam numeru klienta"
            type={10}
            otherStyles={{ marginBottom: verticalScale(26) }}
          />
          <KfInput
            keyboardType={"default"}
            placeholder={"Wpisz hasło"}
            label={"Hasło"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            showPasswordToggle={true}
            hasError={hasError}
            errorMessage={hasError ? "Hasło musi mieć co najmniej 6 znaków" : undefined}
          />
          <KfText title="Nie pamiętam hasła" type={10} />
        </View>
        <View
          style={[globalStyles.buttonsContainer, { gap: verticalScale(22) }]}
        >
          <KfButton
            title={"Dalej"}
            type={KFButtonTypes.Gradient}
            onPress={goToNextStep}
            icon="arrow"
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <AskSmall />
              <KfText title="Pomoc i kontakt" type={7} />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <InfoSmall />
              <KfText title="Informacja prawna" type={7} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default Login;
