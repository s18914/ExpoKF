import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../assets/styles/globalStyles";
import { getRegistrationSettings } from "../src/services/registrationStorage";
import LoginScreen from "./login-screen";

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const checkActivation = async () => {
      try {
        const settings = await getRegistrationSettings();
        console.log(settings)
        if (settings && settings.pin) {
          setIsActivated(true);
        } else {
          router.replace("/hello");
        }
      } catch (error) {
        console.error("Error checking activation:", error);
        router.replace("/hello");
      } finally {
        setIsLoading(false);
      }
    };

    checkActivation();
  }, []);

  if (isLoading) {
    return <View style={globalStyles.container} />;
  }

  if (isActivated) {
    return <LoginScreen />;
  }

  return <View style={globalStyles.container} />;
};

export default Home;
