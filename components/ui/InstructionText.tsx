import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

interface Props {
  children: string;
  style?: ViewStyle;
}

export const InstructionText = ({ children, style }: Props) => {
  return (
    <View>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: Fonts.OpenSans,
    color: Colors.accent500,
    fontSize: 24,
  },
});
