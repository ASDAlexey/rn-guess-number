import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  children: React.JSX.Element[];
}

export const Card = ({ children }: Props) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
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
});
