import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4C1D95",
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    marginTop: 24,
  },
  title: { color: "white", margin: 17, fontSize: 20, fontWeight: "600" },
});
