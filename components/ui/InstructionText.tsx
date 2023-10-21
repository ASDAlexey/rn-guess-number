import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  children: string;
}

export const InstructionText = ({ children }: Props) => {
  return (
    <View>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
