import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input({ placeholder, value, onChange }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.container}
      value={value}
      onChangeText={(e) => onChange(e)}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontSize: 15,
    fontWeight: "600",
    backgroundColor: "#18181b",
    borderColor: "#27272a",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 32,
    color: "white"
  },
});
