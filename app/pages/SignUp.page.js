import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SignUp from '../components/SignUp/SignUp.component';

class SignUpPage extends Component {
  render () {
    return (
      <SignUp navigation={this.props.navigation}/>
    );
  }
}

SignUpPage.navigationOptions = {
  title: 'Registrarse en LILIC' 
};

SignUpPage.propTypes = {
  navigation: PropTypes.obj,
};

export default connect(null, null)(SignUpPage);