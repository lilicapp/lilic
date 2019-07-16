import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Login.component.style';
import {colors} from '../../styles/theme.style';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Button} from 'react-native-paper';
import TextInput from '../../utils/components/TextInput/TextInput';
import validate from '../../utils/validate_wrapper';

class Login extends Component {
  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  handleLogin = () => {
    // Firebase
    const emailError = validate('email', this.state.email);
    const passwordError = validate('password', this.state.password);

    this.setState({
      ...this.state,
      emailError: emailError,
      passwordError: passwordError
    });
    
    if (!emailError && !passwordError) {
      this.props.login(this.state.email, this.state.password);
      this.props.navigation.navigate('Profile');
    }
  };

  handleFormChange = (inputName, value) => { 
    this.setState({
      ...this.state,
      [inputName]: value});
  };

  validateInput = (inputName) => {
    this.setState({
      ...this.state,
      [inputName + 'Error']: validate(inputName, this.state[inputName])
    });
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LILIC</Text>
        <TextInput
          label='Correo electrónico'
          style={styles.textInput}
          autoCapitalize='none'
          onChangeText={(value) => this.handleFormChange('email', value)}
          onBlur={() => this.validateInput('email')}
          error={this.state.emailError}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          label='Contraseña'
          style={styles.textInput}
          autoCapitalize='none'
          onChangeText={(value) => this.handleFormChange('password', value)}
          onBlur={() => this.validateInput('password')}
          error={this.state.passwordError}
          value={this.state.password}
        />
        {this.props.errorMessage ? <Text>{this.props.errorMessage}</Text> : null}
        <Button mode='contained' 
          style={styles.btn} 
          onPress={this.handleLogin}>INICIAR SESIÓN</Button>
        <Text style={styles.text}>Si no tienes cuenta</Text>
        <Button
          mode='contained'
          style={styles.btnSignUp}
          onPress={() => this.props.navigation.navigate('SignUp')} 
          color={colors.blue}
          icon={({size}) => (
            <Fontisto
              name='person'
              size={size}
              color={colors.white}
            />
          )}>
          Únete como cliente
        </Button>
        <Button 
          mode='contained'
          style={styles.btnSignUp} 
          onPress={() => this.props.navigation.navigate('SignUp')}
          color={colors.red}
          icon={({size}) => (
            <Entypo
              name='shop'
              size={size}
              color={colors.white}
            />
          )}>
          Únete como vendedor
        </Button>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
  login: PropTypes.func
};

export default Login;