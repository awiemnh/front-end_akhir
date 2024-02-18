import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
const Background = require("../assets/Splash-Screen.png");
const Lose = require("../assets/youlose.png");



const YouLose = ({navigation,route}) => {
  const {  username,token } = route.params;
  const handleMainMenu = () => {
    navigation.replace("Mainmenu",{ username, token });
  };
  const handleGame = () => {
    navigation.replace("Gameplay",{ username, token });
  };
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.background}
    >
      <Image
        source={Lose}
        style={{ width: 414, height: 402, marginTop: 100 }}
      />
      <TouchableOpacity style={styles.button} onPress={handleGame}>
        <Text style={styles.buttonText1}>Main Lagi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={handleMainMenu}>
        <Text style={styles.buttonText}>Kembali Ke Menu</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    flex: 0,
    backgroundColor: "white",
    padding: 12,
    marginTop: 200,
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
  buttonText1: {
    color: "#6A5AE0",
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 12,
  },
  button1: {
    // backgroundColor: "#6A5AE0",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    marginTop: 20,
    marginBottom: 100,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    width: 311,
    alignItems: "center",
  },
});

export default YouLose;
