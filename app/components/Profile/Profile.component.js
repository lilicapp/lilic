import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './Profile.component.style';
import PropTypes from 'prop-types';

class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello {this.props.authUser.email}</Text>
        <Text>Press here to logout</Text>
        <Button title='Logut' onPress={this.props.logout} />
      </View>
    );
  }
}

Profile.propTypes = {
  authUser: PropTypes.object,
  logout: PropTypes.func,
};

export default Profile;