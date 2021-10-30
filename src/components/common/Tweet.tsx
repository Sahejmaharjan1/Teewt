import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  feeds: { flex: 1 },
  card: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY_2,
    paddingVertical: 10,
    maxWidth: '97%',
    alignSelf: 'center',
  },
  imageWrapper: {
    margin: 5,
  },
  imageProfile: {
    borderRadius: 50,
    height: 50,
    width: 50,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descWrapper: {
    maxWidth: '80%',
    flex: 1,
  },
  userName: {
    paddingBottom: 3,
  },
  userHandle: {
    paddingBottom: 3,
    color: Colors.GREY_5,
  },
  post: {
    paddingBottom: 10,
  },
  like: {
    marginRight: 20,
    width: 80,
  },
  rowStyle: {
    flexDirection: 'row',
  },
});
interface TweetProps {
  image: string;
  userId: string;
  twitterHandle: string;
  post: string;
  likes: string;
}

export function Tweet({ image, userId, twitterHandle, post, likes }: TweetProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.imageProfile} />
      </View>
      <View style={styles.descWrapper}>
        <View style={styles.rowStyle}>
          <Text style={styles.userName}>{userId}</Text>
          <Text style={styles.userHandle}>{twitterHandle}</Text>
        </View>
        <Text numberOfLines={3} style={styles.post}>
          {post}
        </Text>
        <View style={styles.row}>
          <Text style={styles.like}>❤️{likes}</Text>
          <Ionicons name="share-outline" size={18} />
        </View>
      </View>
    </View>
  );
}
