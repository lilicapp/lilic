import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import {logout} from '../redux/actions/auth.actions';
import Profile from '../components/Profile/Profile.component';
import styles from '../styles/common.style';

class ProfilePage extends Component {

  render () {
    const goToLogin = () => this.props.navigation.navigate('Login');
    if (this.props.loadingUser) {
      return (
        <View styles={styles.container}>
          <Text>Cargando churrita</Text>
        </View>
      );
    } else if (!this.props.authUser) {
      goToLogin();
      return (
        <View styles={styles.container}>
          <Text onPress={goToLogin}>Usted debe iniciar sesión, pulse aquí</Text>
        </View>
      );
    } else {
      return (
        <Profile authUser={this.props.authUser} logout={this.props.logout}/>
      );
    }

  }
}

ProfilePage.navigationOptions = {
  header: null
};

ProfilePage.propTypes = {
  navigation: PropTypes.object,
  authUser: PropTypes.object,
  loadingUser: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
  authUser: state.authReducer.authUser,
  loadingUser: state.authReducer.loadingUser
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);