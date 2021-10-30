import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '../components/auth/AuthContext';
import { useProfile } from '../components/home';
import Colors from '../constants/Colors';
import { HomeScreenNavigationProp } from '../navigation/UserNavigator';
import { Tweet } from '../components/common/Tweet';
import { Feed } from '../components/home/types';
import { intToString } from '../utils/utilFunctions';
import Modal from 'react-native-modal';
import { UserModal } from '../components/common/UserModal';
import { UserProfileHeader } from '../components/profile/UserProfileHeader';

const styles = StyleSheet.create({
  userProfileScreen: {
    backgroundColor: Colors.Primary_Color,
    flex: 1,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  tweetWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  topButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userImageWrapper: {
    position: 'absolute',
    top: -40,
    left: 15,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
    borderColor: 'white',
    borderWidth: 4,
  },
  cancelButton: {
    color: Colors.Primary_Color,
  },
  postButton: {
    backgroundColor: Colors.Primary_Color,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  postText: {
    color: Colors.WHITE,
  },
  textInput: {
    flex: 1,
  },

  nameHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  twitterHandle: {
    color: Colors.GREY_6,
    marginBottom: 5,
  },
  shortBio: {
    paddingVertical: 5,
  },
  location: {
    paddingVertical: 5,
    paddingLeft: 4,
    color: Colors.GREY_6,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greyText: {
    color: Colors.GREY_6,
    paddingRight: 5,
    paddingLeft: 2,
  },
  profileDetail: {
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: Colors.GREY_3,
    borderBottomWidth: 1,
  },
  userProfileWrapper: { marginTop: 100, backgroundColor: Colors.WHITE },
  whiteBackground: { backgroundColor: Colors.WHITE },
  emptyPost: {
    backgroundColor: Colors.WHITE,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: { backgroundColor: Colors.Primary_Color },
  info: {
    right: 10,
    top: 50,
    position: 'absolute',
  },
  contentContainerStyle: { flexGrow: 1, backgroundColor: Colors.WHITE },
});

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
            <Text>You have not posted anything</Text>
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
