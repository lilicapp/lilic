import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import MainLayout from '../pages/Main.layout';
import LoginPage from '../pages/Login.page';
import SignUpPage from '../pages/SignUp.page';

const drawer = createDrawerNavigator({
  home: {
    screen: MainLayout,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  }
});

drawer.navigationOptions = {
  header: null
};

const Router = createStackNavigator({
  Drawer: drawer,
  Login: LoginPage,
  SignUp: SignUpPage
});



export default Router;
