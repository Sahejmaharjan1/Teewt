import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TweetPostScreen from '../screens/TweetPostScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNav } from '../components/home';

const Tab = createBottomTabNavigator<BottomStackParamList>();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props: BottomTabBarProps) => <BottomNav {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="UserProfile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}

const UserNavigation = createStackNavigator<UserStackParamList>();

export default React.memo(function UserNavigator() {
  return (
    <UserNavigation.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <UserNavigation.Screen
        options={() => ({
          headerShown: false,
        })}
        name="Bottom"
        component={BottomNavigator}
      />
      <UserNavigation.Screen
        options={() => ({
          animationEnabled: false,
          headerShown: false,
        })}
        name="TweetPost"
        component={TweetPostScreen}
      />
    </UserNavigation.Navigator>
  );
});
export type UserStackParamList = {
  Bottom: undefined;
  TweetPost: undefined;
};

export type BottomStackParamList = {
  Home: undefined;
  UserProfile: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<UserStackParamList, 'Bottom'>;
export type TweetPostScreenNavigationProp = StackNavigationProp<UserStackParamList, 'TweetPost'>;
