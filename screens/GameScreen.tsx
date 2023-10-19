import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from '../components/Title';

export const GameScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/*GUESS*/}
      <View>
        <Text>Higher or Lower?</Text>
        {/*+ -*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
