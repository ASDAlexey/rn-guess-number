import React from 'react';
import { Text, View } from 'react-native';

export function PrimaryButton({ children }: { children: string }): React.JSX.Element {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
