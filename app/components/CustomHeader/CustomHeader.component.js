import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './CustomHeader.component.style';

const CustomHeader = ({navigation}) => (
  <View style={[styles.container]}>
    <View style={[styles.menu]}> 
      <Feather
        name='menu'
        size={30}
        color='black'
        onPress={() => navigation.openDrawer()}
      />
    </View>
    <View>
      <Text style={[styles.text]}>LILIC</Text>
    </View>
    <View style={[styles.icons]}>
      <SimpleLineIcons
        name='basket'
        size={28}
        color='black'
        style={[styles.icon]}
        onPress={() => navigation.navigate('Login')}
      />
      <EvilIcons
        name='search'
        size={40}
        color='black'
        style={[styles.icon]}
      />
    </View>
  </View>
);

CustomHeader.propTypes = {
  navigation: PropTypes.object
};

export default CustomHeader;