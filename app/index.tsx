import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../assets/styles/globalStyles";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/registration");
    }
  }, []),
    (<View style={globalStyles.container}></View>);
};

export default Home;
