import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CustomHeader from '../components/CustomHeader/CustomHeader.component';
import CustomTabNavigator from '../components/CustomTabNavigator/CustomTabNavigator.component';


class Main extends Component {
  static router = CustomTabNavigator.router;
  render () {
    return (
      <View style={{flex: 1}}>
        <CustomHeader navigation={this.props.navigation} />
        <CustomTabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.object,
};

export default connect(null, null)(Main);