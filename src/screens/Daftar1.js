import { StatusBar } from "expo-status-bar";
import axios from "axios";
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
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";


const Background = require("../../assets/background.jpg");
const image = require("../../assets/gabungan.png");

const Daftar = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle signup
  const handleSignup = async () => {
    try {
      const response = await axios.post("https://proper-stirring-serval.ngrok-free.app/api/signup",{ username,email, password });
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.background}
    >
    <KeyboardAvoidingView behavior={"position"}>
      <ScrollView>
      <View>
        <Image source={image} style={styles.gambar1} />
      </View>
      <View style={styles.card}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "Rubik",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Daftar
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20, color: "#858494" }}>
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
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.input}
            placeholder="Konfimasi Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Daftar</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 50,
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
    height: 420,
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

export default Daftar;
