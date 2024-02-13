import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const CHOICES = [
  {
    name: "Batu",
    uri: "http://pngimg.com/uploads/stone/stone_PNG13622.png",
  },
  {
    name: "Kertas",
    uri: "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png",
  },
  {
    name: "Gunting",
    uri: "http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png",
  },
];

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice) => {
  const computerChoice = randomComputerChoice().name;
  let result;

  if (userChoice === "Batu") {
    result = computerChoice === "Gunting" ? "Menang" : "kalah!";
  }
  if (userChoice === "kertas") {
    result = computerChoice === "Batu" ? "Menang!" : "Kalah!";
  }
  if (userChoice === "Gunting") {
    result = computerChoice === "kertas" ? "Menang!" : "Kalah!";
  }

  if (userChoice === computerChoice) result = "SERI";
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

  const onPress = (playerChoice) => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(
      (choice) => choice.name === playerChoice
    );
    const newComputerChoice = CHOICES.find(
      (choice) => choice.name === compChoice
    );

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  const getResultColor = () => {
    if (gamePrompt === "Menang!") return "green";
    if (gamePrompt === "Kalah!") return "red";
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: getResultColor() }}>
        {gamePrompt}
      </Text>
      <View style={styles.choicesContainer}>
        <ChoiceCard player="Player" choice={userChoice} />
        <Text style={{ color: "#250902" }}>vs</Text>
        <ChoiceCard player="Computer" choice={computerChoice} />
      </View>
      {CHOICES.map((choice) => {
        return (
          <Button key={choice.name} name={choice.name} onPress={onPress} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ebee",
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
    backgroundColor: "white",
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
  },
  choiceCardTitle: {
    fontSize: 30,
    color: "#250902",
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
});
