import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Button from "../components/UI/Button";
import ButtonBorder from "../components/UI/ButtonBorder";
import Logobis from "../../assets/logobis.png";

import Card from "../components/UI/habitCard";
import { calculatePercentage } from "../hooks/habitsUtils";
import ProgressBar from "../components/UI/ProgressBar";
import storageCRUD from "../hooks/storageCRUD";

export default function Home({ navigation }) {
  const { habitList, habitDelete, habitUpdate } = storageCRUD();
  const [percentage, setPercentage] = React.useState(0);

  function handlePress() {
    navigation.navigate("CreateHabit");
  }
  let buttonText = "HABITUDES";
  if (percentage >= 100) {
    buttonText = "Félicitations !";
  } else if (percentage >= 60 && percentage < 100) {
    buttonText = "Tu y est presque!";
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.habitList}>
        {habitList.map(({ title, checked }, index) => {
          function handleDelete() {
            habitDelete(index);
          }
          function handleCheck() {
            habitUpdate(index,{title, checked : !checked});
          }
          return (
            <View style={styles.habitContainer}>
              <Card
                key={index}
                title={title}
                checked={checked}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
              />
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.absolutePositionbtn}>
        <Text style={styles.description}>Objectif quotidien</Text>
        <Button onPress={handlePress}>
          {percentage.toFixed(0)}% {buttonText}{" "}
        </Button>
      </View>

      <View style={styles.absolutePosition}>
        <View style={styles.rowContainer}>
          <Image source={Logobis} style={styles.logo} />
          <ButtonBorder onPress={handlePress}>+ New</ButtonBorder>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  habitList: {
    maxHeight: 350,
    marginBottom: 20, // Ajoute un espace en bas pour éviter le chevauchement des boutons
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  habitContainer: {
    width: "100%", // Habitudes occupent 100% de la largeur du conteneur
  },
  absolutePosition: {
    position: "absolute",
    top: "15%",
    right: 20,
  },
  absolutePositionbtn: {
    position: "absolute",
    bottom: "15%",
    width: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    marginRight: 100, // Ajoute une marge à droite du logo
  },
  description: {
    color: "white",
    fontSize: 13,
    marginBottom: -20,
    width: "100%",
    fontWeight: "500",
  },
});
