import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Feed, UserFeed } from './types';
import { useProfile } from '.';
import Colors from '../../constants/Colors';
import { Tweet } from '../common/Tweet';
import { intToString } from '../../utils/utilFunctions';

interface FeedsProps {
  userPosts: UserFeed;
}

const styles = StyleSheet.create({
  feeds: { flex: 1 },
  userHandle: {
    paddingBottom: 3,
    color: Colors.GREY_5,
  },
  rowStyle: {
    flexDirection: 'row',
  },
});

const Feeds: FC<FeedsProps> = ({ userPosts }: FeedsProps) => {
  const { allUserProfileData } = useProfile();

  const renderItem = ({ item, index }: { item: Feed; index: number }) => {
    const getUserData = (userId: string) => {
      return allUserProfileData?.users.find((data) => data.id === userId);
    };
    const getUserName = (userId: string) => {
      const userData = allUserProfileData?.users.find((data) => data.id === userId);
      return `${userData?.first_name} ${userData?.last_name}  `;
    };
    return (
      <Tweet
        key={index.toString()}
        image={getUserData(item.user_id)?.profile_picture as string}
        likes={intToString(item.likes)}
        post={item.post}
        twitterHandle={getUserData(item.user_id)?.twitter_handle as string}
        userId={getUserName(item.user_id)}
      />
    );
  };
  return (
    <View style={styles.feeds}>
      <FlatList
        data={userPosts.feeds}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index.toString()}
      />
    </View>
  );
};

export { Feeds };
