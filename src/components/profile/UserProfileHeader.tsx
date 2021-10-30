import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FunctionWithNoParam } from '../../utils/types';

interface UserProfileHeaderProps {
  onInfoHandler: FunctionWithNoParam;
  profilePic?: string;
  firstName?: string;
  lastName?: string;
  twitterHandle?: string;
  shortBio?: string;
  location?: string;
  following?: string;
  followers?: string;
}

const styles = StyleSheet.create({
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
  textInput: {
    flex: 1,
  },
  nameHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.Off_Black,
  },
  twitterHandle: {
    color: Colors.GREY_6,
    marginBottom: 5,
  },
  shortBio: {
    paddingVertical: 5,
    color: Colors.Off_Black,
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
  text: {
    color: Colors.Off_Black,
  },
});

export function UserProfileHeader({
  onInfoHandler,
  profilePic,
  firstName,
  lastName,
  twitterHandle,
  shortBio,
  location,
  following,
  followers,
}: UserProfileHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.info}>
        <Pressable onPress={onInfoHandler}>
          <Ionicons name="information-circle-outline" color={Colors.WHITE} size={30} />
        </Pressable>
      </View>
      <View style={styles.userProfileWrapper}>
        <View style={styles.userImageWrapper}>
          <Image source={{ uri: profilePic }} style={styles.userImage} />
        </View>
        <View style={styles.profileDetail}>
          <View>
            <Text style={styles.nameHeading}>{`${firstName} ${lastName}`}</Text>
            <Text style={styles.twitterHandle}>{`${twitterHandle}`}</Text>
            <Text style={styles.shortBio}>{`${shortBio}`}</Text>
            <View style={styles.rowContainer}>
              <Ionicons name="location" color={Colors.GREY_5} />
              <Text style={styles.location}>{`${location}`}</Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.text}>{following}</Text>
              <Text style={styles.greyText}>Following</Text>
              <Text style={styles.text}>{followers}</Text>
              <Text style={styles.greyText}>Followers</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
