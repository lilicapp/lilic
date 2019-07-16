import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../components/Login/Login.component';

import {login} from '../redux/actions/auth.actions';

class LoginPage extends Component {
  render () {
    return (
      <Login login={this.props.login} navigation={this.props.navigation} errorMessage={this.props.error}/>
    );
  }
}

LoginPage.propTypes = {
  navigation: PropTypes.object,
  authUser: PropTypes.object,
  login: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
});

const mapStateToProps = (state) => ({
  authUser: state.authReducer.authUser,
  error: state.authReducer.error
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);