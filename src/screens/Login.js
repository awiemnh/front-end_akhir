import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"; 

const OptionScreen = ({navigation}) => {
  const handleBuatAkunPress = () => {
    navigation.navigate("Daftar"); // Navigate to the 'Daftar' screen
  };

  return (
    <View style={styles.OptionScreen}>
      <Image
        style={styles.IphoneX11ProLightBase}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dc5r7sxjopr-2136%3A307?alt=media&token=82a47207-79c3-4828-b3af-8e99aa1c774b",
        }}
      />
      <Image
        style={styles.Group9}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dc5r7sxjopr-2118%3A7827?alt=media&token=4da9a752-41f2-44e5-9d16-c563f5578a58",
        }}
      />
      <Image
        style={styles.O}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dc5r7sxjopr-2136%3A300?alt=media&token=c63c7dc1-a59f-42b4-b72c-2a419841a072",
        }}
      />
      <Image
        style={styles.Frame4234}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dc5r7sxjopr-2118%3A8299?alt=media&token=68864d1b-991c-4eb0-8708-7265e7e73e11",
        }}
      />
      <View style={styles.Frame4238}>
        <View style={styles.LoginOrSignUp}>
          <Text style={styles.MasukAtauDaftar}>Masuk atau Daftar</Text>
          <Text style={styles.SilahkanMasukAtauDaf}>
            Silahkan masuk atau daftar untuk menikmati permainan
          </Text>
        </View>
        <View style={styles.Frame4232}>
          <View style={styles.TextField}>
            <Text style={styles.Text}>Username</Text>
          </View>
          <View style={styles.TextField1}>
            <Text style={styles.Text2}>Password</Text>
          </View>
          <View style={styles.Buttons}>
            <View style={styles.Button1}>
              <Text style={styles.Button}>Login</Text>
            </View>
            <TouchableOpacity onPress={handleBuatAkunPress}>
              <Text style={styles.BuatAkunBaru}>Buat akun baru</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  OptionScreen: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 375,
    height: 812,
    paddingBottom: 32,
    boxSizing: "border-box",
    backgroundColor: "rgba(106,90,224,1)",
  },
  IphoneX11ProLightBase: {
    width: "100%",
    height: 44,
  },
  Group9: {
    position: "absolute",
    top: 73,
    left: 18,
    width: 338.24,
    height: 271.24,
  },
  O: {
    position: "absolute",
    top: 100,
    left: -185,
    width: 636,
    height: 551,
  },
  Frame4234: {
    position: "absolute",
    top: 73,
    left: 18,
    width: 338.24,
    height: 271.24,
  },
  Frame4238: {
    position: "absolute",
    top: 382,
    left: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 343,
    height: 398,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 34,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  LoginOrSignUp: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    boxSizing: "border-box",
  },
  MasukAtauDaftar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,24,51,1)",
    fontSize: 24, // Removed quotes around the value
    lineHeight: "150%",
    fontFamily: "Rubik, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  SilahkanMasukAtauDaf: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(133,132,148,1)",
    fontSize: 16, // Removed quotes around the value
    lineHeight: "150%",
    fontFamily: "Rubik, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Frame4232: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    boxSizing: "border-box",
  },
  TextField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginRight: 16,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 11,
    paddingBottom: 11,
    borderWidth: 1,
    borderColor: "rgba(226,232,240,1)",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Text: {
    color: "rgba(100,116,139,1)",
    fontSize: 16, // Removed quotes around the value
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  TextField1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginRight: 16,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 11,
    paddingBottom: 11,
    borderWidth: 1,
    borderColor: "rgba(226,232,240,1)",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Text2: {
    color: "rgba(100,116,139,1)",
    fontSize: 16, // Removed quotes around the value
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  Button1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingLeft: 131,
    paddingRight: 131,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(106,90,224,1)",
  },
  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 16, // Removed quotes around the value
    lineHeight: "150%",
    fontFamily: "Rubik, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  BuatAkunBaru: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(106,90,224,1)",
    fontSize: 16, // Removed quotes around the value
    lineHeight: "150%",
    fontFamily: "Rubik, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default OptionScreen;
