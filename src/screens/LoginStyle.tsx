import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: Colors.Primary_Color,
    flex: 1,
  },
  loginScreen_iconWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  loginScreen_icon: {
    width: 50,
    height: 50,
  },
  loginScreen_authContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});
