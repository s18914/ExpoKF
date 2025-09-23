import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    //console.log("Home component mounted");
    if (typeof window !== "undefined") {
      router.push("/registration");
    }
  }, []),
    (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default Home;
