import React, { FC, useState } from 'react';
import { Text, Image, View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '../components/auth/AuthContext';
import { useProfile } from '../components/home';
import Colors from '../constants/Colors';
import { HomeScreenNavigationProp } from '../navigation/UserNavigator';
import { NotifierTitle } from '../utils/enums';
import notifier from '../utils/Notifiers/Notifier';
import { styles } from './TweetPostStyle';

interface TweetPostScreenProps {
  navigation: HomeScreenNavigationProp;
}
const TweetPostScreen: FC<TweetPostScreenProps> = ({ navigation }: TweetPostScreenProps) => {
  const [post, setPost] = useState<string | null>(null);

  const { userPosts, setUserPosts, allUserProfileData } = useProfile();
  const { user } = useUser();
  const getUserData = () => {
    return allUserProfileData?.users.find((data) => data.id === user!.user_id);
  };
  const onPostHandler = () => {
    if (!post) {
      notifier.error(NotifierTitle.POST, 'Nothing to post');
      return;
    } else {
      if (post.length === 0) {
        notifier.error(NotifierTitle.POST, 'You have not entered any message to post');
        return;
      }
      if (post.length < 25) {
        notifier.error(NotifierTitle.POST, 'Message you have entered is less than 25 of lenght');
        return;
      }
      userPosts &&
        setUserPosts({
          feeds: [{ id: user!.id, likes: '0', post: post, user_id: user!.user_id }, ...userPosts.feeds],
        });
      notifier.success(NotifierTitle.POST);
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={styles.tweetPostScreen}>
      <View style={styles.container}>
        <View style={styles.topButtonContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </Pressable>
          <Pressable onPress={onPostHandler}>
            <View style={styles.postButton}>
              <Text style={styles.postText}>Post</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.tweetWrapper}>
          <View style={styles.userImageWrapper}>
            <Image source={{ uri: getUserData()?.profile_picture }} style={styles.userImage} />
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={setPost}
            multiline
            placeholder="What's Happening?"
            placeholderTextColor={Colors.Off_Black}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TweetPostScreen;
