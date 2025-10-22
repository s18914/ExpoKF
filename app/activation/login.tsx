import { useContext, useEffect, useState } from "react";
import { Keyboard, Platform, View } from "react-native";
import KfText from "../../components/common/KfText/KfText";
import KfInput from "../../components/common/KfInput/KfInput";
import { globalStyles } from "../../assets/styles/globalStyles";
import TileIcon from "../../components/common/TileIcon/TileIcon";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";

import AskSmall from "../../assets/icons/ask_small";
import InfoSmall from "../../assets/icons/info";
import KfRegistrationHeader from "../../components/composite/KfRegistrationHeader/KfRegistrationHeader";
import { RegistrationContext } from "./_layout";
import { useRouter } from "expo-router";

const Login = () => {
  const regContext = useContext(RegistrationContext);
  const router = useRouter();
  const [clientNumber, setClientNumber] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  //scroll button
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isLastInputFocused, setIsLastInputFocused] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => setKeyboardHeight(e.endCoordinates.height)
    );
    const hideSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardHeight(0)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const goToNextStep = () => {
    if (clientNumber.length == 1) {
      router.push("/activation/complete-big-registration");
      return;
    }
    if (password.length < 6) {
      //setHasError(true);
      //return;
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
            onFocus={() => setIsLastInputFocused(false)}
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
            onFocus={() => setIsLastInputFocused(true)}
            errorMessage={
              hasError ? "Hasło musi mieć co najmniej 6 znaków" : undefined
            }
          />
          <KfText title="Nie pamiętam hasła" type={10} />
        </View>
        <View
          style={[
            globalStyles.buttonsContainer,
            { gap: verticalScale(22) },
            isLastInputFocused && { marginBottom: keyboardHeight },
          ]}
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

export default Login;
