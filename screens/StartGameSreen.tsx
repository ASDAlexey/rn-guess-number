import React from 'react';
import { TextInput, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

export function StartGameSreen(): React.JSX.Element {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
