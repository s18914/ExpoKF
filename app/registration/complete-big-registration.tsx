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

const CompleteBigRegistration = () => {
  const regContext = useContext(RegistrationContext);

  const goToPreviousStep = () => {
    regContext.goToNextStep();
  };

  return (
    <View style={{ flex: 1 }}>
      <KfFeatureCard
        title="Dokończ rejestrację&nbsp;konta"
        title2="Posiadasz login i hasło, ale Twoje konto na KupFundusz.pl nie jest w pełni kompletne."
        title3="Dokończ proces zakładania konta, by móc rozpocząć inwestowanie, a następnie aktywuj dostęp do aplikacji."
        color={GradientColor.Green}
        button1="Dokończ rejestrację konta"
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
          title="Dokończ rejestrację konta"
          type={KFButtonTypes.Gradient}
        />
      </View>
    </View>
  );
};

export default CompleteBigRegistration;
