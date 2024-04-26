import React from "react";
import { StyleSheet, View  } from "react-native";
import Logo from "../../../assets/logo.png"

export default function Logo() {
  return (
    <View>
        <Logo></Logo>
    </View>
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
});
