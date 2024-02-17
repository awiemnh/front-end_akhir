import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

const Background = require("../../assets/background.jpg");
const image = require("../../assets/gabungan.png");

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const [fontsLoaded, fontError] = useFonts({
    "Rubik-Black": require("../../src/assets/fonts/Rubik-Black.ttf"),
    "Rubik-BlackItalic": require("../../src/assets/fonts/Rubik-BlackItalic.ttf"),
    "Rubik-Bold": require("../../src/assets/fonts/Rubik-Bold.ttf"),
    "Rubik-BoldItalic": require("../../src/assets/fonts/Rubik-BoldItalic.ttf"),
    "Rubik-ExtraBold": require("../../src/assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-ExtraBoldItalic": require("../../src/assets/fonts/Rubik-ExtraBoldItalic.ttf"),
    "Rubik-Italic": require("../../src/assets/fonts/Rubik-Italic.ttf"),
    "Rubik-Light": require("../../src/assets/fonts/Rubik-Light.ttf"),
    "Rubik-LightItalic": require("../../src/assets/fonts/Rubik-LightItalic.ttf"),
    "Rubik-Medium": require("../../src/assets/fonts/Rubik-Medium.ttf"),
    "Rubik-MediumItalic": require("../../src/assets/fonts/Rubik-MediumItalic.ttf"),
    "Rubik-Regular": require("../../src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../../src/assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-SemiBoldItalic": require("../../src/assets/fonts/Rubik-SemiBoldItalic.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Function to handle login
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://proper-stirring-serval.ngrok-free.app/api/login",
        {
          username,
          password,
        }
      );
      const token = response.data.token;
      setToken(token);
      navigation.replace("Mainmenu", { username, token });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle registration
  const handleDaftar = () => {
    navigation.navigate("Daftar");
  };

  return (
    <ScrollView>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.background}
      >
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}>
          <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={image} style={styles.gambar1} />
          </View>
          <View style={styles.card}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                fontFamily: "Rubik-Medium",
                fontWeight: "bold",
                margin: 10,
                marginTop: 30,
              }}
            >
              Masuk ke Akun
            </Text>
            <Text
              style={{
                fontFamily: "Rubik-Regular",
                textAlign: "center",
                fontSize: 20,
                color: "#858494",
              }}
            >
              Silahkan daftar untuk menikmati permainan
            </Text>

            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={handleDaftar}>
                <Text style={styles.buttonText1}>Buat Akun Baru</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 16,
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gambar1: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "#fff",
    marginBottom: 70,
    borderRadius: 40,
    width: 343,
    height: 480,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 48,
    width: "100%",
    borderColor: "#E2E8F0",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#6A5AE0",
    padding: 12,
    margin: 20,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    width: 311,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Rubik-Medium",
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 12,
  },
  buttonText1: {
    fontFamily: "Rubik-Medium",
    color: "#6A5AE0",
    fontSize: 16,
    fontWeight: "500",
  },
  button1: {
    padding: 12,
    margin: 10,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    width: 311,
    alignItems: "center",
  },
});

export default Login;
