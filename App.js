import React, { useState } from "react";
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from "react-native";

const CHOICES = [
  {
    name: "rock",
    uri: "https://raynormw.github.io/hacktiv8/phase0/week2/batu.png",
  },
  {
    name: "paper",
    uri: "https://raynormw.github.io/hacktiv8/phase0/week2/kertas.png",
  },
  {
    name: "scissors",
    uri: "https://hanifwihananto.github.io/suwit-jepang/img/gunting.png",
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

const ChoiceCard = ({ player, choice: { uri, name } }) => {
  const title = name && name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>{player}</Text>
      <Image source={{ uri }} resizeMode="contain" style={styles.choiceImage} />
      <Text style={styles.choiceCardTitle}>{title}</Text>
    </View>
  );
};

export default function App() {
  const [gamePrompt, setGamePrompt] = useState("Chose your weapon!");
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [lives, setLives] = useState(5);

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
      setLives(lives - 1);
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
      source={{ uri: 'https://img.freepik.com/free-vector/mars-landscape-red-alien-planet-background-desert-surface-with-mountains-rocks-deep-cleft-stars-shine-green-sky-martian-extraterrestrial-computer-game-backdrop-cartoon-illustration_107791-3890.jpg?w=1480&t=st=1707799423~exp=1707800023~hmac=7e8e6365752fa84feb7b1163e3ef84c45cd34a8e6e69e1a7d4af176a0eb1ba62' }} // Ganti URL dengan gambar yang Anda inginkan
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={{ fontSize: 35, color: getResultColor(), fontFamily: 'Roboto' }}>
          {gamePrompt}
        </Text>
        <Text style={{ fontSize: 20, marginBottom: 20, fontFamily: 'Roboto' }}>
          Lives: {lives}  Your Score: {userScore}  Computer Score: {computerScore}
        </Text>
        <View style={styles.choicesContainer}>
          <ChoiceCard player="Player" choice={userChoice} />
          <Text style={{ color: "#250902", fontFamily: 'Roboto' }}>vs</Text>
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
}

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
    fontFamily: 'Roboto',
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
    fontFamily: 'Roboto',
  },
  choiceCardTitle: {
    fontSize: 30,
    color: "#250902",
    fontFamily: 'Roboto',
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
});
