import React, { FC } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const AuthNavigator = createStackNavigator<AuthStackParamList>();

const AuthNavigation: FC = () => {
  return (
    <AuthNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthNavigator.Screen name="Login" component={LoginScreen} />
    </AuthNavigator.Navigator>
  );
};

export default AuthNavigation;

export type AuthStackParamList = {
  Login: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;
