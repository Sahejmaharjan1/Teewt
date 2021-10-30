import { Platform, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  inputField: {
    height: 86.72,
    justifyContent: 'center',
  },
  text_heading: {
    color: Colors.WHITE,
    fontSize: 16,
    letterSpacing: 0.32,
  },

  action: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.WHITE,
    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    marginBottom: Platform.OS === 'ios' ? 0 : -5,
    paddingLeft: Platform.OS === 'ios' ? 0 : -2,
    fontSize: 16,
    color: Colors.WHITE,
  },

  errorMsg: {
    color: Colors.RED_Error,
    fontSize: 14,
  },
});
