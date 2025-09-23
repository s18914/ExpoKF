import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import KfText from "../../components/common/KfText/KfText";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";

const Hello = () => {
  return (
    <View style={styles.container}>
      <Svg
        width="1200"
        height="2500"
        style={{ position: "absolute", transform: [{ rotate: "-55deg" }] }}
      >
        <Defs>
          <RadialGradient id="grad" cx="75%" cy="40%" r="35%" fx="75%" fy="50%">
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
          <View style={styles.buttonsContainer}>
            <KfButton
              title={"Mam konto. Aktywuj aplikację"}
              type={KFButtonTypes.Gradient}
              icon="arrow"
            />
            <KfButton
              title={"Nie mam konta. Otwórz za darmo"}
              type={KFButtonTypes.Outlined}
              icon="arrow"
            />
          </View>
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
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo3D: {
    position: "absolute",
    top: verticalScale(70),
    left: horizontalScale(0),
  },
  content: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    padding: verticalScale(30),
    display: "flex",
    gap: verticalScale(20),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    display: "flex",
    gap: 15,
    width: "100%",
  },
});

export default Hello;
