import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export const styles = StyleSheet.create({
  tweetPostScreen: {
    backgroundColor: Colors.WHITE,
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
    alignSelf: 'flex-start',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
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
    color: Colors.Off_Black,
  },
});
