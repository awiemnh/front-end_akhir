import React from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
const gambar1 = require("../assets/caraousel-1.jpg");
const gambar2 = require("../assets/caraousel-2.jpg");
const Background = require("../assets/Splash-Screen.png");



const MainMenu = ({navigation,route}) => {
  const {  username,token } = route.params;
  const handleGame = () => {
    navigation.navigate("Gameplay",token);
  };
  
  const handleLogout = async () => {
    try {
      const response = await axios.post("w", {
        username
      },{headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }});
      navigation.replace("Login", { username, token });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.background}
    >
      <Text
        style={{
          marginTop: 200,
          fontSize: 25,
          justifyContent: "flex-start",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Hallo, {username}
      </Text>
      <Text
        style={{
          marginTop: 20,
          fontSize: 16,
          color: "white",
        }}
      >
        Selamat datang di arena SuWiT. Tunjukkan kemampuanmu dan jadilah Raja
        SuWit !
      </Text>
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <Image
            source={gambar1}
            style={{ width: 340, height: 204, borderRadius: 20 }}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={gambar2}
            style={{ width: 340, height: 204, borderRadius: 20 }}
          />
        </View>
      </Swiper>
      <TouchableOpacity style={styles.button} onPress={handleGame}>
        <Text style={styles.buttonText1}>Mulai Bermain</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    marginTop: 50,
    // backgroundColor: "#9DD6EB",
  },
  slide2: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    // backgroundColor: "#97CAE5",
  },

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
    margin: 2,
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

export default MainMenu;
