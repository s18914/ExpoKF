import { useContext, useEffect, useState } from "react";
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
import { BiometryType } from "../../src/services/registrationStorage";

const SetBiometry = () => {
  const regContext = useContext(RegistrationContext);
  const [title, setTitle] = useState("Logowanie Touch ID");
  const [description, setDescription] = useState("Włącz logowanie do aplikacji odciskiem palca Touch ID.");
  const [buttonText, setButtonText] = useState("Włącz Touch ID");
  const [icon, setIcon] = useState<"fingerprint" | "faceId" | "userEdit" | "noWifi" | "notificationPhone">("fingerprint");
  const [color, setColor] = useState<GradientColor>(GradientColor.Violet);

  useEffect(() => {
    if (regContext.biometryInfo) {
      const { type, displayName } = regContext.biometryInfo;
      
      if (type === BiometryType.FACE_ID) {
        setTitle("Logowanie Face ID");
        setDescription("Włącz logowanie do aplikacji za pomocą Face ID.");
        setButtonText("Włącz Face ID");
        setIcon("faceId");
        setColor(GradientColor.Green);
      } else if (type === BiometryType.TOUCH_ID) {
        setTitle("Logowanie Touch ID");
        setDescription("Włącz logowanie do aplikacji odciskiem palca Touch ID.");
        setButtonText("Włącz Touch ID");
        setIcon("fingerprint");
        setColor(GradientColor.Violet);
      } else {
        setTitle("Logowanie biometryczne");
        setDescription("Włącz logowanie biometryczne za pomocą jednej z trzech metod: Fingerprint (czytnik linii papilarnych), Face unlock (rozpoznawanie twarzy) lub Iris scanner (skaner tęczówki).");
        setButtonText("Włącz logowanie biometryczne");
        setIcon("fingerprint");
        setColor(GradientColor.Violet);
      }
    }
  }, [regContext.biometryInfo]);

  const handleEnable = () => {
    regContext.setBiometryLoginEnabled(true);
    regContext.goToNextStep();
  };

  const handleSkip = () => {
    regContext.setBiometryLoginEnabled(false);
    regContext.goToNextStep();
  };

  return (
    <View style={{ flex: 1 }}>
      <KfFeatureCard
        title={title}
        title2={description}
        title3={`Po włączeniu ${icon === 'fingerprint' ? 'biometrii' : title.replace('Logowanie ', '')} nadal możesz logować się do aplikacji za pomocą kodu PIN. Zawsze możesz wyłączyć tę funkcję w menu „Ustawienia konta”.`}
        color={color}
        icon={icon}
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
          title={buttonText}
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

export default SetBiometry;
