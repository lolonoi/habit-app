import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/UI/Button";
import Logo from "../../assets/logo.png";
import Titlesplash from "../../assets/titlesplsh.png";



export default function Splash({ navigation }) {
  function handlePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={styles.title}>Vers une meilleure {'\n'}version de toi-même</Text>
      <Image source={Titlesplash} />
      <Button onPress={handlePress}> DAY ONE </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  title : {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center"
  },
});