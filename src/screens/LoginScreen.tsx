import React, { FC } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm } from '../components/auth';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: Colors.Primary_Color,
    flex: 1,
  },
  loginScreen_iconWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  loginScreen_icon: {
    width: 50,
    height: 50,
  },
  loginScreen_authContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

const LoginScreen: FC = () => {
  return (
    <SafeAreaView style={styles.loginScreen}>
      <View style={styles.loginScreen_authContainer}>
        <View style={styles.loginScreen_iconWrapper}>
          <Image source={require('../assets/Teewter_Logo.png')} style={styles.loginScreen_icon} />
        </View>
        <LoginForm />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
