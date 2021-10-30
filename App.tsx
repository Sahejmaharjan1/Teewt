import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import FlashMessage from 'react-native-flash-message';
import AuthContext from './src/components/auth/AuthContext';

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <AuthContext>
          <AppNavigator />
        </AuthContext>
        <FlashMessage />
      </SafeAreaProvider>
    </>
  );
};

export default App;
