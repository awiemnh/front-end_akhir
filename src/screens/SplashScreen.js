import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View } from "react-native";

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Navigate to the login screen after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Use replace instead of navigate to prevent the user from going back to the splash screen
    }, 2000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  const images = [
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ip6d64km0ra-2118%3A6366?alt=media&token=3df02e8a-6349-4cc7-95cb-82b3cb2770d9",
      style: styles.O,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ip6d64km0ra-2118%3A6377?alt=media&token=5ca700e3-85a3-4aaa-80a7-cc92bbf00730",
      style: styles.Logo,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ip6d64km0ra-2118%3A8307?alt=media&token=265efe48-3fcb-4b24-ac74-57e33fe9e38a",
      style: styles.Image4Traced,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ip6d64km0ra-2118%3A6395?alt=media&token=8f8c8767-2388-4719-bc98-8ce3e72669e7",
      style: styles.IphoneX11ProLightBase,
    },
  ];

  return (
    <View style={styles._1SplashScreen}>
      {images.map((image, index) => (
        <Image key={index} style={image.style} source={{ uri: image.uri }} />
      ))}
      <View style={styles.AppLogo}>
        <Text style={styles.Suwit}>SuWiT !</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  _1SplashScreen: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 375,
    height: 812,
    boxSizing: "border-box",
    backgroundColor: "rgba(106,90,224,1)",
  },
  O: {
    position: "absolute",
    top: -66,
    left: -211,
    width: 820,
    height: 972,
  },
  AppLogo: {
    position: "absolute",
    top: 308,
    left: 125,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 124,
    height: 166,
    boxSizing: "border-box",
  },
  Suwit: {
    position: "absolute",
    top: 115.8,
    left: -5.42,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 36, // Removed quotes around the value
    lineHeight: "140%",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.36, // Removed quotes around the value
  },
  Logo: {
    position: "absolute",
    left: 12,
    width: 100,
    height: 100,
  },
  Image4Traced: {
    position: "absolute",
    top: "17.47%",
    bottom: "62.65%",
    left: "9.68%",
    right: "9.68%",
    width: 100,
    height: 33,
  },
  IphoneX11ProLightBase: {
    position: "absolute",
    width: "100%",
    height: 44,
  },
});

export default SplashScreen;