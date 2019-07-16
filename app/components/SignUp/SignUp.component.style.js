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
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    marginTop: 40,
    marginBottom: 80,
    width: '90%',
  },
  signUpIcon: {
    margin: -5,
    borderRadius: 90
  },
});