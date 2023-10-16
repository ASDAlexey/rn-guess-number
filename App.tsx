import { StyleSheet } from 'react-native';
import { StartGameSreen } from './screens/StartGameSreen';

export default function App() {
  return <StartGameSreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
