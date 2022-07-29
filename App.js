import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
}
