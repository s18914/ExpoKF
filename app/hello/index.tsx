import { View, StyleSheet, Image } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import KfText from "../../components/common/KfText/KfText";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";
import { globalStyles } from "../../assets/styles/globalStyles";
import { useRouter } from "expo-router";

const Hello = () => {
  const router = useRouter();
  const goToLogin = () => {
    router.push("/registration/login");
  };

  return (
    <View style={globalStyles.container}>
      <Svg
        width="1300"
        height="2000"
        style={{ position: "absolute", transform: [{ rotate: "-54deg" }] }}
      >
        <Defs>
          <RadialGradient id="grad" cx="73%" cy="42%" r="37%" fx="75%" fy="50%">
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
        <Rect x="0" y="-40" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <View
        style={{
          width: 1300,
          height: 2000,
          position: "absolute",
          transform: [{ rotate: "-54deg" }],
        }}
      >
        <Image
          source={require("../../assets/images/KF_Logo3D.png")}
          style={[
            styles.logo3D,
            { transform: [{ rotate: "54deg" }, { scale: 0.9 }] },
          ]}
        />
        <Image
          source={require("../../assets/images/spark.png")}
          style={[styles.spark, { transform: [{ rotate: "54deg" }] }]}
        />
      </View>

      <View style={styles.content}>
        <Image
          source={require("../../assets/images/splash-icon.png")}
          style={{ width: 165, height: 45 }}
        />
        <View style={styles.text}>
          <KfText
            type={0}
            color="white"
            isTextCenter={true}
            title={"Witamy na KupFundusz.pl"}
          />
          <KfText
            type={4}
            isTextCenter={true}
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
    flex: 1,
  },
  logo3D: {
    position: "absolute",
    top: 670,
    left: 590,
  },
  spark: {
    position: "absolute",
    top: 410,
    left: 442,
  },
  content: {
    display: "flex",
    flex: 1,
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
