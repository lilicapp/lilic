import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Button, TextInput} from 'react-native-paper';

import styles from './SignUp.component.style';
import {colors} from '../../styles/theme.style';
import Entypo from 'react-native-vector-icons/Entypo';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: ''
  };

  handleSignUp = () => {
    console.log('le ha dado');
    this.props.signUpUser(this.state.email, this.state.password);
    this.props.navigation.navigate('Profile');
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ÚNETE A LILICp</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          label='Nombre'
          onChangeText={(nombre) => this.setState({nombre})}
          value={this.state.nombre}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          label='Correo electrónico'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize='none'
          label='Contraseña'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button mode='contained' style={styles.btn} onPress={this.handleSignUp}>REGISTRARSE</Button>
        <Text>También puedes registrarte con:</Text>
        <View style={styles.signUp}>
          <Button style={styles.signUpIcon} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Entypo
              name='google--with-circle'
              size={48}
              color={colors.red}
            />
          </Button>
          <Button style={styles.signUpIcon} onPress={() => this.handleSignUp}>
            <Entypo
              name='facebook-with-circle'
              size={48}
              color='#3C5A99'
            />
          </Button>
        </View>
      </View>
    );
  }
}

SignUp.propTypes = {
  navigation: PropTypes.object,
  signUpUser: PropTypes.func
};

export default SignUp;