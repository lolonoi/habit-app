import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Card({ title, handleDelete, checked, handlechecked  }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBox} onPress={handlechecked}>
       {checked && < Ionicons name="checkbox" size={29} color="#16A34A"></Ionicons>}
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.sousTitle}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  checkBox: {
    width: 30,
    height: 30,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 14, fontWeight: "600", marginTop: 6 },
  sousTitle: { color: "#27272a", marginTop: 2, fontWeight: "600" },
});
