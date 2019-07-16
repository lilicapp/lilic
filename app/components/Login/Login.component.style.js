import {StyleSheet} from 'react-native';
import {colors} from '../../styles/theme.style';
import Common from '../../styles/common.style';

export default StyleSheet.create({
  container: {
    ...Common.container
  },
  textInput: {
    width: '90%',
    backgroundColor: colors.white
  },
  title: {
    color: colors.primary,
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 20
  },
  signUp: {
    flexDirection: 'column',
    alignContent: 'space-around'
  },
  btnSignUp: {
    width: '90%',
    marginTop: 10
  },
  btn: {
    marginTop: 40,
    marginBottom: 70,
    width: '90%',
  },
  text: {
    fontSize: 14,
    marginBottom: 20
  }
});