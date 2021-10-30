import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import { useProfile } from '.';
import Colors from '../../constants/Colors';
import { useUser } from '../auth/AuthContext';

const styles = StyleSheet.create({
  nav: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  iconWrapper: {
    backgroundColor: Colors.Primary_Color,
    borderRadius: 15,
    paddingHorizontal: 20,
    borderColor: Colors.Primary_Color,
    borderWidth: 2,
    margin: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
  outer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    borderColor: Colors.Primary_Color,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  userImageWrapper: {
    borderRadius: 50,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: 'hidden',
  },
});

export function BottomNav({ navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { allUserProfileData } = useProfile();

  const { user } = useUser();
  const getUserData = () => {
    return allUserProfileData?.users.find((data) => data.id === user!.user_id);
  };
  const onUserImageHandle = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <View style={[styles.nav, { bottom: insets.bottom }]}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Entypo name="home" size={30} color={Colors.Off_Black} />
      </Pressable>
      <View style={styles.outer}>
        <Pressable onPress={() => navigation.navigate('TweetPost')}>
          <View style={styles.iconWrapper}>
            <Image source={require('../../assets/Teewter_Logo.jpg')} style={styles.icon} />
          </View>
        </Pressable>
      </View>
      <Pressable onPress={onUserImageHandle}>
        <View style={styles.userImageWrapper}>
          <Image source={{ uri: getUserData()?.profile_picture }} style={styles.userImage} />
        </View>
      </Pressable>
    </View>
  );
}
