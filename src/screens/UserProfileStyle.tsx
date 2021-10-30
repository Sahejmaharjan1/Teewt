import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export const styles = StyleSheet.create({
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
  emptyPostText: {
    color: Colors.Off_Black,
  },
});
