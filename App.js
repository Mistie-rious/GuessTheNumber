import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts} from "expo-font";
import  AppLoading  from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

 const [fontsLoaded] =  useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),

  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(chosenNumber) {
    setUserNumber(chosenNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber}  roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
  }

 
  return (
    <>
    <StatusBar style="light" />
    <LinearGradient colors={["#4978dc", "#3343d5", ]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
       
      >
        <SafeAreaView style={styles.rootScreen} >
       {screen}
       </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
   
  },
  backgroundImage: {
    opacity: 0.55,
    flex: 1,
  }
});
