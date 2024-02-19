import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./src/screens/SplashScreen";
import OptionScreen from "./src/screens/Login";
import Daftar from "./src/screens/Daftar1";
import MainMenu from "./src/screens/MainMenu";
import Gameplay from "./src/components/GamePlay";
import YouWin from "./src/screens/YouWin";
import YouLose from "./src/screens/YouLose";
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" options={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={OptionScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Daftar" component={Daftar} options={{ headerShown: false }} />
          <Stack.Screen name="Mainmenu" component={MainMenu} options={{ headerShown: false }} />
          <Stack.Screen name="Gameplay" component={Gameplay} options={{ headerShown: false }} />
          <Stack.Screen name="Youwin" component={YouWin} options={{ headerShown: false }} />
          <Stack.Screen name="Youlose" component={YouLose} options={{ headerShown: false }} />

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
