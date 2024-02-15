import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
const Background = require("../../assets/background.jpg");
const image = require("../../assets/gabungan.png");

export default function Daftar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi untuk menangani login
  const handleLogin = () => {
    // Logika autentikasi bisa ditambahkan di sini
    // Misalnya, memeriksa username dan password dengan data di server
    console.log("Username:", username);
    console.log("Password:", password);
    // ... logika autentikasi lainnya
  };

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.background}
    >
      <View>
        <Image source={image} style={styles.gambar1} />
      </View>
      <View style={styles.card}>
        <Text
          style={{ textAlign: "center", fontSize: 40, fontFamily: "Rubik" }}
        >
          Daftar
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Silahkan daftar untuk menikmati permainan
        </Text>

        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
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
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 30,
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
    height: 396,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
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
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 12,
  },
});