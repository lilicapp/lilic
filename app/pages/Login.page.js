import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login/Login.component';

class LoginPage extends Component {
  render () {
    return (
      <Login navigation={this.props.navigation}/>
    );
  }
}

LoginPage.navigationOptions = {
  title: 'Iniciar sesión' 
};

// HomePage.propTypes = {
//   testAction: PropTypes.func,
//   test: PropTypes.string,
// };

export default connect(null, null)(LoginPage);