import { useContext } from "react";
import { View } from "react-native";
import { globalStyles } from "../../assets/styles/globalStyles";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import KfButton, {
  KFButtonTypes,
} from "../../components/common/KfButton/KfButton";
import { RegistrationContext } from "./_layout";
import KfFeatureCard, {
  GradientColor,
} from "../../components/composite/KfFeatureCard/KfFeatureCard";

const SetBiometry = () => {
  const regContext = useContext(RegistrationContext);

  return (
    <View style={{ flex: 1 }}>
      <KfFeatureCard
        title="Logowanie Touch ID"
        title2="Włącz logowanie do aplikacji odciskiem palca Touch ID."
        title3="Po włączeniu Touch ID nadal możesz logować się do aplikacji za pomocą kodu PIN. Zawsze możesz wyłączyć tę funkcję w menu „Ustawienia konta”."
        color={GradientColor.Violet}
      />
      <View
        style={[
          globalStyles.buttonsContainer,
          {
            paddingHorizontal: horizontalScale(30),
            paddingBottom: verticalScale(25),
          },
        ]}
      >
        <KfButton
          title="Włącz Touch ID"
          onPress={() => regContext.goToNextStep()}
          type={KFButtonTypes.Gradient}
        />
        <KfButton title="Nie teraz" type={KFButtonTypes.Outlined} />
      </View>
    </View>
  );
};

export default SetBiometry;
