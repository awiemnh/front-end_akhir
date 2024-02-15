import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationAction } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import SplashScreen from "./src/screens/SplashScreen";
// import Login from "./src/screens/Login";
import Game from "./src/components/GamePlay";
import Daftar from "./src/screens/Daftar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SplashScreen /> */}
      {/* <Game /> */}
      {/* <Login /> */}
      <Daftar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
