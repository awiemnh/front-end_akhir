import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

const MasukDaftarOpsi = () => (
  <View style={styles.MasukDaftarOpsi}>
    <Image
      style={styles.MobileIOS}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yewpblqs7wi-2136%3A307?alt=media&token=33735a90-5a5e-40cd-966a-0cbcf95f3ad2",
      }}
    />
    <Image
      style={styles.Suwit}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yewpblqs7wi-2118%3A7827?alt=media&token=2bb33fd4-2c11-4e4e-bf8d-b1234dc4112c",
      }}
    />
    <Image
      style={styles.kosong}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yewpblqs7wi-2136%3A300?alt=media&token=7431ad31-add7-4b7e-bd8a-f4197c02ed16",
      }}
    />
    <Image
      style={styles.Frame4234}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yewpblqs7wi-2118%3A8299?alt=media&token=493c5d79-0363-48e6-b4be-2c495557a45a",
      }}
    />
    <View style={styles.TextBoxMasukDaftar}>
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
          <Text style={styles.BuatAkunBaru}>Buat akun baru</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  MasukDaftarOpsi: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 375,
    height: 812,
    paddingBottom: 34,
    boxSizing: "border-box",
    backgroundColor: "rgba(106,90,224,1)",
    },
    MobileIOS: {
        width: "100%",
        height: 44,
    },
    Suwit: {
        position: "absolute",
        top: 73,
        left: 18,
        width: 338.24,
        height: 271.24,
    },
    kosong: {
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
    TextBoxMasukDaftar: {
        position: "absolute",
        top: 380,
        left: 16,
        display: "flex",
        flexDirection: "column",
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
        fontSize: "24px",
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
        fontSize: "16px",
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
        fontSize: "16px",
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
        fontSize: "16px",
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
        fontSize: "16px",
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
        fontSize: "16px",
        lineHeight: "150%",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "500",
        textAlign: "center",
  },
});
