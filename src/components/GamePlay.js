import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import GameOverOverlay from "./customGameOver";
const Batu = require("../../assets/batu.png");
const Kertas = require("../../assets/kertas.png");
const Gunting = require("../../assets/gunting.png");
const Background = require("../../assets/background.jpg");
const Versus = require("../../assets/versus.png");

const CHOICES = [
  {
    name: "rock",
    image: Batu,
  },
  {
    name: "paper",
    image: Kertas,
  },
  {
    name: "scissors",
    image: Gunting,
  },
];

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice) => {
  const computerChoice = randomComputerChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};

const Button = (props) => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => props.onPress(props.name)}
  >
    <Text style={styles.buttonText}>
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
    </Text>
  </TouchableOpacity>
);

const ChoiceCard = ({ player, choice: { image, name } }) => {
  const title = name && name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>{player}</Text>
      <Image source={image} resizeMode="contain" style={styles.choiceImage} />
      <Text style={styles.choiceCardTitle}>{title}</Text>
    </View>
  );
};

const Gameplay = ({ navigation, route }) => {
  const [gamePrompt, setGamePrompt] = useState("Chose your weapon!");
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [showOverlay, setShowOverlay] = useState(false);
  //const [overlayType, setOverlayType] = useState(""); // New state to determine overlay type

  const { username, token } = route.params;
  const onPress = (playerChoice) => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(
      (choice) => choice.name === playerChoice
    );
    const newComputerChoice = CHOICES.find(
      (choice) => choice.name === compChoice
    );

    if (result === "Victory!") {
      setUserScore(userScore + 1);
    } else if (result === "Defeat!") {
      setComputerScore(computerScore + 1);
      if (lives > 0) {
        setLives(lives - 1);
      }
    }

    // Check for game over conditions
    if (lives === 1) {
      if (userScore > computerScore) {
        setShowOverlay(true);
        navigation.navigate('Youwin',{ username, token });
      } else if (userScore < computerScore) {
        setShowOverlay(true);
        navigation.navigate('Youlose',{ username, token });
      }
    }

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  const getResultColor = () => {
    if (gamePrompt === "Victory!") return "green";
    if (gamePrompt === "Defeat!") return "red";
    return null;
  };

  return (
    <ImageBackground
      source={Background} // Ganti URL dengan gambar yang Anda inginkan
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
      <GameOverOverlay visible={showOverlay}/>
        <Text
          style={{
            fontSize: 35,
            color: getResultColor(),
            fontFamily: "Roboto",
          }}
        >
          {gamePrompt}
        </Text>
        <Text style={{ fontSize: 20, marginBottom: 20, fontFamily: "Roboto" }}>
          Lives: {lives} Your Score: {userScore} Computer Score: {computerScore}
        </Text>
        <View style={styles.choicesContainer}>
          <ChoiceCard player="Player" choice={userChoice} />
          {/* <Text style={{ color: "#250902", fontFamily: "Roboto" }}>vs</Text> */}
          <Image source={Versus} style={styles.versus} />
          <ChoiceCard player="Computer" choice={computerChoice} />
        </View>
        {CHOICES.map((choice) => {
          return (
            <Button key={choice.name} name={choice.name} onPress={onPress} />
          );
        })}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Tambahkan opasitas agar gambar latar belakang tidak terlalu gelap
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#640D14",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: "grey",
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 1,
    alignItems: "center",
  },
  choiceDescription: {
    fontSize: 25,
    color: "#250902",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontFamily: "Roboto",
  },
  choiceCardTitle: {
    fontSize: 30,
    color: "#250902",
    fontFamily: "Roboto",
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
  // versus:{

  // }
});

export default Gameplay;
