import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';



import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../../src/assets/Splash-Screen.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      </ImageBackground>

      {/* Icon Aplikasi */}
      <Image
        source={require('../../src/assets/App-logo-with-text.png')} 
        style={styles.appIcon}
        resizeMode="contain"
      />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  appIcon: {
    width: 200, // Sesuaikan ukuran icon aplikasi sesuai kebutuhan
    height: 200, // Sesuaikan ukuran icon aplikasi sesuai kebutuhan
  },
});

export default SplashScreen;
