import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BerandaScreen from './src/screens/OptionScreen';
import MasukScreen from './src/screens/MasukScreen';
import Sign


// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import SignupScreen from './src/screens/SignupScreen';
// import PopUpModal from './src/components/PopUpModal';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Login'>
//         <Stack.Screen name="Home" component={HomeScreen}/>
//         <Stack.Screen name="Login" component={LoginScreen}/>
//         <Stack.Screen name="Signup" component={SignupScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });