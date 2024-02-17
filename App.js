import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./src/screens/SplashScreen";
import OptionScreen from "./src/screens/Login";
import Daftar from "./src/screens/Daftar1";
import MainMenu from "./src/screens/MainMenu";
import Gameplay from "./src/components/GamePlay";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={OptionScreen} />
          <Stack.Screen name="Daftar" component={Daftar} />
          <Stack.Screen name="Mainmenu" component={MainMenu} />
          <Stack.Screen name="Gameplay" component={Gameplay} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
