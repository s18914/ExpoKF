import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import KfPageHeader from "../../components/composite/KfPageHeader/KfPageHeader";

const Login = () => {
  return (
    <View style={styles.container}>
      <KfPageHeader
        step={1}
        title="Aktywacja aplikacji (krok 1 z 5)"
        onBack={function (s: string): {} {
          throw new Error("Function not implemented.");
        }}
      />
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
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
