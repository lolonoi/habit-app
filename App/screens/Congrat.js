import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import Button from "../components/UI/Button";
import ConfettiCannon from "react-native-confetti-cannon";

export default function CreateHabit({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  function handlePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Félicitations !
      </Animated.Text>
      <Animated.Text style={[styles.description, { opacity: fadeAnim }]}>
        Tu as réussi à atteindre ton objectif !
      </Animated.Text>
      <ConfettiCannon
        count={200} // Nombre de confettis à afficher
        origin={{ x: -10, y: 0 }} // Position de départ des confettis
        autoStart={true} // Démarrage automatique de l'animation
        explosionSpeed={200} // Vitesse de l'explosion des confettis
        fadeOut={true}
      />
      <Button onPress={handlePress}>Retour à l'accueil</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 15,
  },
  description: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});
