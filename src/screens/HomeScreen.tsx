import axios, { AxiosResponse } from 'axios';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feeds, useProfile } from '../components/home';
import { UserFeed } from '../components/home/types';
import Colors from '../constants/Colors';
import { NotifierTitle } from '../utils/enums';
import notifier from '../utils/Notifiers/Notifier';
import { styles } from './HomeStyle';

const HomeScreen: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { userPosts, setUserPosts } = useProfile();
  const getUserPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response: AxiosResponse = await axios.get(
        'https://res.cloudinary.com/prohorde/raw/upload/v1633980024/cdn/teewt_api/teewt_feeds_idwoi7.json'
      );
      setUserPosts(response.data as UserFeed);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        notifier.error(NotifierTitle.LOGIN, error.message);
      }
    }
  }, [setUserPosts]);
  useEffect(() => {
    getUserPosts();
  }, [getUserPosts]);
  if (loading) {
    return (
      <SafeAreaView style={styles.homeScreen}>
        <ActivityIndicator color={Colors.WHITE} size="large" />
      </SafeAreaView>
    );
  }
  if (!userPosts || userPosts.feeds.length === 0) {
    <SafeAreaView style={styles.homeScreen}>
      <Text>No Feeds Available</Text>
    </SafeAreaView>;
  }
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.iconWrapper}>
        <Image source={require('../assets/Teewter_Logo.jpg')} style={styles.icon} />
      </View>
      <Feeds userPosts={userPosts as UserFeed} />
    </SafeAreaView>
  );
};

export default HomeScreen;
