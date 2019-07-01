import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './Login.component.style';
import PropTypes from 'prop-types';
import {login} from '../../services/authentication.service';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: ''
  };

  handleLogin = () => {
    // Firebase
    login(this.state.email, this.email.password);
  };
  
  render () {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {/* {this.state.errorMessage &&
          <Text style={{color: 'red'}}>
            {this.state.errorMessage}
          </Text>} */}
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          placeholder='Email'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize='none'
          placeholder='Password'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title='Login' onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object
};

export default Login;