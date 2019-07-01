import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './SignUp.component.style';
import PropTypes from 'prop-types';
import {signUp} from '../../services/authentication.service';


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: ''
  };

  handleSignUp = () => {
    // TODO: Firebase stuff...
    signUp(this.state.email, this.state.password);
  }
  
  render () {
    return (
      <View style={styles.container}>
        {/* {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>} */}
        <TextInput
          placeholder='Email'
          autoCapitalize='none'
          style={styles.textInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder='Password'
          autoCapitalize='none'
          style={styles.textInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title='Sign Up' onPress={this.handleSignUp} />
        <Button
          title='Already have an account? Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

SignUp.propTypes = {
  navigation: PropTypes.object
};

export default SignUp;