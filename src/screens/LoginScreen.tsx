import React, { FC } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm } from '../components/auth';
import { styles } from './LoginStyle';

const LoginScreen: FC = () => {
  return (
    <SafeAreaView style={styles.loginScreen}>
      <ScrollView contentContainerStyle={styles.loginScreen_authContainer}>
        <View style={styles.loginScreen_iconWrapper}>
          <Image source={require('../assets/Teewter_Logo.png')} style={styles.loginScreen_icon} />
        </View>
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
