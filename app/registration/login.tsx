import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import KfText from "../../components/common/KfText/KfText";

const Login = () => {
  return (
    <View style={styles.container}>
      <KfText title="Pierwsze logowanie" type={1} />
      <KfText
        title="Wprowadź dane do logowania powiązane z Twoim kontem na KupFundusz.pl"
        type={6}
      />
      <KfText title="Numer klienta (8-cyfrowy)" type={5} />
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
