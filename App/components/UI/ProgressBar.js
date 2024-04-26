import React from "react";
import { View, StyleSheet } from "react-native";

export default function ProgressBar({ percentage }) {
  // Déterminez la couleur de la barre de progression
  let barColor = "#4C1D95"; // Couleur par défaut
  if (percentage === 0) {
    barColor = "gray"; // Si le pourcentage est à 0, la couleur est grise
  }

  // Calculez la hauteur de la barre en fonction du pourcentage
  const barHeight = 10; // Hauteur par défaut
  const dynamicHeight = percentage === 0 ? 0 : barHeight;

  return (
    <View style={[styles.progressBar, { marginTop: 15 }]}>
      <View
        style={[
          styles.progressBarFill,
          { width: `${percentage}%`, height: dynamicHeight, backgroundColor: barColor },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#E0E0E0", // Couleur de fond de la barre
    borderRadius: 5, // Bords arrondis
  },
  progressBarFill: {
    borderRadius: 5, // Bords arrondis
  },
});