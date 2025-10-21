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

const EventNotifications = () => {
  const regContext = useContext(RegistrationContext);

  const handleEnable = async () => {
    regContext.setNotificationsEnabled(true);
    // Zakończ rejestrację i zapisz wszystkie dane
    await regContext.completeRegistration();
  };

  const handleSkip = async () => {
    regContext.setNotificationsEnabled(false);
    // Zakończ rejestrację i zapisz wszystkie dane
    await regContext.completeRegistration();
  };

  return (
    <View style={{ flex: 1 }}>
      <KfFeatureCard
        title="Powiadomienia o&nbsp;zdarzeniach"
        title2="Włącz powiadomienia, aby być na bieżąco. Będziemy Cię informować min. o zrealizowanych transakcjach czy istotnych zmianach w Twoim portfelu inwestycyjnym."
        title3="Zawsze możesz wyłączyć tę funkcję w ustawieniach swojego telefonu."
        color={GradientColor.Yellow}
        icon="talk"
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
          title="Włącz powiadomienia"
          onPress={handleEnable}
          type={KFButtonTypes.Gradient}
        />
        <KfButton 
          title="Nie teraz" 
          type={KFButtonTypes.Outlined}
          onPress={handleSkip}
        />
      </View>
    </View>
  );
};

export default EventNotifications;
