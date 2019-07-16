import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import MainLayout from '../pages/Main.layout';
import LoginPage from '../pages/Login.page';
import SignUpPage from '../pages/SignUp.page';

const Drawer = createDrawerNavigator({
  home: {
    screen: MainLayout,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  }
});

Drawer.navigationOptions = {
  header: null
};

const Router = createStackNavigator({
  Drawer: Drawer,
  Login: LoginPage,
  SignUp: SignUpPage
}, {
  defaultNavigationOptions: {
    headerStyle: {
      elevation: 0,
    }
  }
});



export default Router;
