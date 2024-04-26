import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonBorder({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    borderColor: "#4C1D95",
    borderWidth: 1,
  },
  title: { color: "white", fontSize: 15, fontWeight: "500" },
});
