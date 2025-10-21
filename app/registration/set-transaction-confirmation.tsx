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

const SetTransactionConfirmation = () => {
  const regContext = useContext(RegistrationContext);
  const [title, setTitle] = useState("Potwierdzanie transakcji Touch ID");
  const [description, setDescription] = useState("Włącz potwierdzanie zleceń za pomocą Touch ID.");
  const [buttonText, setButtonText] = useState("Włącz Touch ID");
  const [icon, setIcon] = useState<"fingerprint" | "faceId" | "userEdit" | "noWifi" | "notificationPhone">("fingerprint");

  useEffect(() => {
    if (regContext.biometryInfo) {
      const { type } = regContext.biometryInfo;
      
      if (type === BiometryType.FACE_ID) {
        setTitle("Potwierdzanie transakcji Face ID");
        setDescription("Włącz potwierdzanie zleceń za pomocą Face ID.");
        setButtonText("Włącz Face ID");
        setIcon("faceId");
      } else if (type === BiometryType.TOUCH_ID) {
        setTitle("Potwierdzanie transakcji Touch ID");
        setDescription("Włącz potwierdzanie zleceń za pomocą Touch ID.");
        setButtonText("Włącz Touch ID");
        setIcon("fingerprint");
      } else {
        // Android lub inne
        setTitle("Potwierdzanie transakcji biometrią");
        setDescription("Włącz potwierdzanie zleceń za pomocą biometrii.");
        setButtonText("Włącz potwierdzanie biometryczne");
        setIcon("fingerprint");
      }
    }
  }, [regContext.biometryInfo]);

  const handleEnable = () => {
    regContext.setBiometryTransactionEnabled(true);
    regContext.goToNextStep();
  };

  const handleSkip = () => {
    regContext.setBiometryTransactionEnabled(false);
    regContext.goToNextStep();
  };

  return (
    <View style={{ flex: 1 }}>
      <KfFeatureCard
        title={title}
        title2={description}
        title3={`Po włączeniu ${title.replace('Potwierdzanie transakcji ', '')} nadal możesz potwierdzać zlecenia za pomocą kodu PIN.`}
        color={GradientColor.Green}
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

export default SetTransactionConfirmation;
