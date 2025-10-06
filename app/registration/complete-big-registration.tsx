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
import KfText from "../../components/common/KfText/KfText";
import BackButton from "../../components/common/BackButton/BackButton";
import headerStyle from "../../components/composite/KfRegistrationHeader/style";
import KfStatusBar from "../../components/common/KfStatusBar/KfStatusBar";

const CompleteBigRegistration = () => {
  const regContext = useContext(RegistrationContext);

  const goToPreviousStep = () => {
    regContext.goToStep(1);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={headerStyle.container}>
        <BackButton
          style={headerStyle.arrow}
          onPress={() => goToPreviousStep()}
        />
        <KfText title="Aktywacja aplikacji (krok 1 z 5)" type={5} />
      </View>
      <KfStatusBar />
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
