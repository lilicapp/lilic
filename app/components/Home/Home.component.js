import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './Home.component.style';

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Please enter your note here...</Text>
      </View>
    );
  }
}

export default Home;