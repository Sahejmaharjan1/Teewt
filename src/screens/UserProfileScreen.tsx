import React, { FC, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '../components/auth/AuthContext';
import { useProfile } from '../components/home';
import { HomeScreenNavigationProp } from '../navigation/UserNavigator';
import { Tweet } from '../components/common/Tweet';
import { Feed } from '../components/home/types';
import { intToString } from '../utils/utilFunctions';
import Modal from 'react-native-modal';
import { UserModal } from '../components/common/UserModal';
import { UserProfileHeader } from '../components/profile/UserProfileHeader';
import { styles } from './UserProfileStyle';

interface TweetPostScreenProps {
  navigation: HomeScreenNavigationProp;
}

const UserProfileScreen: FC<TweetPostScreenProps> = ({}: TweetPostScreenProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const { userPosts, allUserProfileData } = useProfile();

  const { user } = useUser();
  const onInfoHandler = () => {
    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };
  const getUserData = () => {
    return allUserProfileData?.users.find((data) => data.id === user!.user_id);
  };
  const renderItem = ({ item, index }: { item: Feed; index: number }) => {
    // eslint-disable-next-line no-shadow
    const getUserData = (userId: string) => {
      return allUserProfileData?.users.find((data) => data.id === userId);
    };
    const getUserName = (userId: string) => {
      const userData = allUserProfileData?.users.find((data) => data.id === userId);
      return `${userData?.first_name} ${userData?.last_name}  `;
    };
    return (
      <View style={styles.whiteBackground} key={index.toString()}>
        <Tweet
          image={getUserData(item.user_id)?.profile_picture as string}
          likes={intToString(item.likes)}
          post={item.post}
          twitterHandle={getUserData(item.user_id)?.twitter_handle as string}
          userId={getUserName(item.user_id)}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.userProfileScreen}>
      <FlatList
        ListHeaderComponent={
          <UserProfileHeader
            onInfoHandler={onInfoHandler}
            profilePic={getUserData()?.profile_picture}
            firstName={getUserData()?.first_name}
            lastName={getUserData()?.last_name}
            twitterHandle={getUserData()?.twitter_handle}
            shortBio={getUserData()?.short_bio}
            location={getUserData()?.location}
            following={getUserData()?.following}
            followers={getUserData()?.followers}
          />
        }
        data={userPosts!.feeds.filter((item) => item.user_id === user?.user_id)}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.emptyPost}>
            <Text style={styles.emptyPostText}>You have not posted anything</Text>
          </View>
        }
        keyExtractor={(item, index) => item.id + index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Modal isVisible={modal} onBackdropPress={closeModalHandler}>
        <UserModal longBio={getUserData()?.long_bio as string} closeModal={closeModalHandler} />
      </Modal>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
