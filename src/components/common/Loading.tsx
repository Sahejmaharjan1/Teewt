import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
});
const Loading: FC = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator color={Colors.Primary_Color} size="large" />
    </View>
  );
};
export { Loading };
