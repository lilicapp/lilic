import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CustomHeader from '../components/CustomHeader/CustomHeader.component';
import CustomTabNavigator from '../components/CustomTabNavigator/CustomTabNavigator.component';

import {auth} from '../redux/actions/auth.actions';

class Main extends Component {
  static router = CustomTabNavigator.router;

  componentDidMount () {
    this.props.auth();
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <CustomHeader navigation={this.props.navigation} />
        <CustomTabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth: () => dispatch(auth())
});

Main.propTypes = {
  auth: PropTypes.func,
  navigation: PropTypes.object
};


export default connect(null, mapDispatchToProps)(Main);