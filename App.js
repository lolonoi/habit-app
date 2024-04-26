import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import Navigation from "./App/navigation/navigation";
import { AppProvider } from "./App/state/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
  },
});
