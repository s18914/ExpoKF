import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet, KeyboardTypeOptions } from "react-native";
import KfText from "../../components/common/KfText/KfText";
import KfInput from "../../components/common/KfInput/KfInput";
import { globalStyles } from "../../assets/styles/globalStyles";
import TileIcon from "../../components/common/TileIcon/TileIcon";

const Login = () => {
  return (
    <View style={globalStyles.content}>
      <TileIcon icon="badge_lock" color="var(--light-green)" />
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
      <KfText title="Nie pamiętam numeru klienta" type={10} />
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
