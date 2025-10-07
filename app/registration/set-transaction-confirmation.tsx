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

const SetTransactionConfirmation = () => {
  const regContext = useContext(RegistrationContext);

  return (
    <View style={{ flex: 1 }}>
      <KfFeatureCard
        title="Potwierdzanie transakcji Face ID"
        title2="Włącz potwierdzanie zleceń za pomocą Face ID."
        title3="Po włączeniu Face ID nadal możesz potwierdzać zlecenia za pomocą kodu PIN."
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

export default SetTransactionConfirmation;
