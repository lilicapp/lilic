import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SignUp from '../components/SignUp/SignUp.component';

import {signUp} from '../redux/actions/auth.actions';


class SignUpPage extends Component {
  render () {
    return (
      <SignUp signUpUser={this.props.signUp} navigation={this.props.navigation}/>
    );
  }
}

SignUpPage.propTypes = {
  navigation: PropTypes.object,
  signUp: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password) => dispatch(signUp(email, password))
});

export default connect(null, mapDispatchToProps)(SignUpPage);