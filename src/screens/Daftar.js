import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

const DaftarScreen = () => {
  return (
    <View style={styles.DaftarScreen}>
      <Image
        style={styles.IphoneX11ProLightBase}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f316cwpmg6-2180%3A228?alt=media&token=a6a606a1-7fae-400a-b6bc-d5b516ea228e"
        }}
      />
      {/* Other Image components */}
      <View style={styles.Frame4238}>
        <View style={styles.LoginOrSignUp}>
          <Text style={styles.Daftar}>Daftar</Text>
          <Text style={styles.SilahkanDaftarUntukM}>
            Silahkan daftar untuk menikmati permainan
          </Text>
        </View>
        {/* Other View components */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    DaftarScreen: {
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
      paddingBottom: 26,
      borderRadius: 20,
      boxSizing: "border-box",
      backgroundColor: "rgba(255,255,255,1)",
    },
    LoginOrSignUp: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      paddingLeft: 35,
      paddingRight: 35,
      boxSizing: "border-box",
    },
    Daftar: {
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
    SilahkanDaftarUntukM: {
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
    TextField2: {
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
    Text4: {
      color: "rgba(100,116,139,1)",
      fontSize: "16px",
      lineHeight: "150%",
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
    },
    Buttons: {
      width: "100%",
      height: 56,
      boxSizing: "border-box",
    },
    Button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      paddingLeft: 131,
      paddingRight: 131,
      paddingTop: 14,
      paddingBottom: 14,
      borderRadius: 20,
      boxSizing: "border-box",
      backgroundColor: "rgba(106,90,224,1)",
    },
    Daftar2: {
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
  })

export default DaftarScreen;
