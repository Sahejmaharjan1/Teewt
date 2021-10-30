import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  loginForm: {
    width: '90%',
    flex: 1,
  },
  loginForm_heading: {
    color: Colors.WHITE,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  loginForm_container: {
    flexGrow: 1,
  },
  loginForm_containerPressable: { flex: 1 },
  loginForm_containerWrapper: { justifyContent: 'center', flex: 1 },
  loginForm_forgotPasswordContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  loginForm_forgotPasswordText: {
    color: Colors.GREY_5,
    fontSize: 14,
    letterSpacing: 0.32,
    marginRight: '15%',
  },
  authButton: { flex: 1, maxWidth: 300 },
  loginForm_buttonWrapper: {
    marginTop: 100,
    marginBottom: 30,
  },
});

export default styles;
