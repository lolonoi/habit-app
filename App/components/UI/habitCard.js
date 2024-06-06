import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Card({ title, handleDelete, checked, handleCheck }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBox} onPress={handleCheck}>
        {checked && (
          <Ionicons name="checkbox" size={28} color="#22C55E"></Ionicons>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  checkBox: {
    width: 29,
    height: 29,
    borderWidth: 1,
    backgroundColor:'black',
    borderColor: '#27272A',
    justifyContent: 'center',
    borderRadius:8 ,
    alignItems: 'center',
    marginRight: 10,
  },
  title: { color: "white", fontSize: 14, fontWeight: "600", marginTop: 6 },
  sousTitle: { color: "#27272a", marginTop: 2, fontWeight: "600" },
});
