import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
}

export const GameOverScreen = ({ roundsNumber, userNumber, onRestart }: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.jpg')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>Start new game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: Fonts.OpenSans,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.primary500,
  },
});
