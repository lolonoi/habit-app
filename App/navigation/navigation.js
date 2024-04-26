import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Go from "../screens/Go";
import Home from "../screens/Home";
import CreateHabit from "../screens/CreateHabit";
import Congrat from "../screens/Congrat"


export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#09090A", // Couleur de fond du header pour le thème sombre
          },
          headerTintColor: "#fff", // Couleur du texte du header pour le thème sombre
        }}
      >
        <Stack.Screen
          name="Go"
          component={Go}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateHabit"
          component={CreateHabit}
          options={{ title: "Add Habit" }}
        />
        <Stack.Screen
          name="Congrat"
          component={Congrat}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
