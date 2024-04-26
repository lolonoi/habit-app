import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/UI/Button";

import newHabitManage from "../hooks/newHabitManage";

export default function CreateHabit({ navigation }) {
  const { fieldsTab, handleSubmit} = newHabitManage();
  function handlePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Félicitations !</Text>
      <Text style={styles.description}>
        Quelles est ta nouvelle résolution ?
      </Text>
      <Button onPress={handleSubmit}>Ajouter</Button>
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
    width: "100%",
    marginBottom: 15,
  },
  description: { color: "white", fontSize: 12, marginBottom: 8, width: "100%" },
});
