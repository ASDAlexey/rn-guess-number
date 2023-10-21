import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from './constants/colors';
import { GameOverScreen } from './screens/GameOverScreen';
import { GameScreen } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameSreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  // const [appIsReady, setAppIsReady] = useState(false);
  const [userNumber, setUserNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  function pickedNumberHandler(pickedNumber: number): void {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver) {
    screen = <GameOverScreen />;
  }

  function gameOverHandler(): void {
    setGameIsOver(true);
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
