import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Colors } from '../constants/colors';

type StartGameScreenProps = {
  onPickNumber: (value: number) => void;
};

export const StartGameScreen = ({ onPickNumber }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText: string): void {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler(): void {
    setEnteredNumber('');
  }

  function confirmInputHandler(): void {
    const chosenNumber = parseInt(enteredNumber, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
