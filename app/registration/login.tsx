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

const Login = () => {
  return (
    <View style={globalStyles.content}>
      <View>
        <TileIcon icon="user" color="light-green" />
        <KfText title="Pierwsze logowanie" type={1} />
        <KfText
          title="Wprowadź dane do logowania powiązane z Twoim kontem na KupFundusz.pl"
          type={6}
        />

        <KfInput
          keyboardType={"numeric"}
          placeholder={"Wpisz numer klienta"}
          label={"Numer klienta (8-cyfrowy)"}
          onChangeText={function (s: string): {} {
            throw new Error("Function not implemented.");
          }}
        />
        <KfText
          title="Nie pamiętam numeru klienta"
          type={10}
          otherStyles={{ marginBottom: verticalScale(26) }}
        />
        <KfInput
          keyboardType={"numeric"}
          placeholder={"Wpisz hasło"}
          label={"Hasło"}
          onChangeText={function (s: string): {} {
            throw new Error("Function not implemented.");
          }}
        />
        <KfText title="Nie pamiętam hasła" type={10} />
      </View>
      <View style={[globalStyles.buttonsContainer, { gap: verticalScale(22) }]}>
        <KfButton title={"Dalej"} type={KFButtonTypes.Gradient} icon="arrow" />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <KfText title="Pomoc i kontakt" type={7} />
          <KfText title="Informacja prawna" type={7} />
        </View>
      </View>
    </View>
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
