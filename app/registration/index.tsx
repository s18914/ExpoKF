import { useRouter } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import KfText from "../../components/common/KfText/KfText";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";
import { globalStyles } from "../../assets/styles/globalStyles";
import { useContext } from "react";
import { RegistrationContext } from "./_layout";

const Hello = () => {
  const router = useRouter();
  const regContext = useContext(RegistrationContext);
  const goToLogin = () => {
    router.push("/registration/login");
    regContext.updateStep(1);
  };

  return (
    <View style={globalStyles.container}>
      <Svg
        width="1200"
        height="2500"
        style={{ position: "absolute", transform: [{ rotate: "-56deg" }] }}
      >
        <Defs>
          <RadialGradient id="grad" cx="74%" cy="38%" r="44%" fx="75%" fy="50%">
            <Stop offset="0" stopColor="rgba(255, 255, 255, 1)" />
            <Stop offset="0.3" stopColor="rgba(255, 255, 255, 1)" />
            <Stop offset="0.35" stopColor="rgba(228, 255, 199, 1)" />
            <Stop offset="0.37" stopColor="rgba(255, 255, 255, 1)" />
            <Stop offset="0.38" stopColor="rgba(230, 255, 204, 1)" />
            <Stop offset="0.44" stopColor="rgba(255, 255, 255, 1)" />
            <Stop offset="0.51" stopColor="rgba(195, 255, 131, 1)" />
            <Stop offset="0.57" stopColor="rgba(168, 255, 145, 1)" />
            <Stop offset="0.66" stopColor="rgba(255, 255, 255, 1)" />
            <Stop offset="0.71" stopColor="rgba(165, 255, 141, 1)" />
            <Stop offset="0.83" stopColor="rgba(18, 207, 151, 1)" />
            <Stop offset="0.92" stopColor="rgba(4, 126, 89, 1)" />
            <Stop offset="1" stopColor="rgba(5, 41, 30, 1)" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <Image
        source={require("../../assets/images/KF_Logo3D.png")}
        style={styles.logo3D}
      />
      <Image
        source={require("../../assets/images/spark.png")}
        style={styles.spark}
      />
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/splash-icon.png")}
          style={{ width: 165, height: 45 }}
        />
        <View style={styles.text}>
          <KfText type={0} color="white" title={"Witamy na KupFundusz.pl"} />
          <KfText
            type={4}
            color="white"
            title="Ponad 400 funduszy inwestycyjnych bez prowizji w jednym miejscu."
          />
          <View style={globalStyles.buttonsContainer}>
            <KfButton
              title={"Mam konto. Aktywuj aplikację"}
              type={KFButtonTypes.White}
              icon="arrow"
              onPress={goToLogin}
            />
            <KfButton
              title={"Nie mam konta. Otwórz za darmo"}
              type={KFButtonTypes.OutlinedWhite}
              icon="arrow"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo3D: {
    position: "absolute",
    top: verticalScale(60),
    left: horizontalScale(0),
  },
  spark: {
    position: "absolute",
    top: verticalScale(-180),
    left: horizontalScale(-300),
  },
  content: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    padding: horizontalScale(25),
    display: "flex",
    gap: verticalScale(20),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Hello;
