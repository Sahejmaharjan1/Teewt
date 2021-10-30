import React, { FC, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import AuthNavigation from './AuthNavigator';
import { isReadyRef, navigationRef } from './NavigatorRef';
import { useUser } from '../components/auth/AuthContext';
import UserNavigator from './UserNavigator';
import ProfileContext from '../components/home/UserProfileContext';

const AppNavigator: FC = () => {
  const { user } = useUser();
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
        RNBootSplash.hide();
      }}
    >
      {!user ? (
        <AuthNavigation />
      ) : (
        <ProfileContext>
          <UserNavigator />
        </ProfileContext>
      )}
    </NavigationContainer>
  );
};
export default AppNavigator;
