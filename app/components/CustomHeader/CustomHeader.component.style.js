import {StyleSheet} from 'react-native';
import {colors} from '../../styles/theme.style';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingTop: 10,
    backgroundColor: colors.white
  },
  menu: {
    marginLeft: 20
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 20
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10
  }
});

export default styles;