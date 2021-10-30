import React from 'react';
import { ActivityIndicator, GestureResponderEvent, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface CustomButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  center?: boolean;
  loading?: boolean;
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    maxWidth: '90%',
    width: 150,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.WHITE,
    marginBottom: 20,
  },
  center: {
    alignSelf: 'center',
  },
});
export function CustomButton({ onPress, center, loading }: CustomButtonProps) {
  return (
    <Pressable disabled={loading} onPress={onPress} style={[styles.button, center ? styles.center : undefined]}>
      {loading ? (
        <ActivityIndicator color={Colors.WHITE} size="small" />
      ) : (
        <AntDesign name="right" color={Colors.WHITE} size={20} />
      )}
    </Pressable>
  );
}
