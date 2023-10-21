import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

type TitleProps = {
  children: string;
};

export const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
  },
});
