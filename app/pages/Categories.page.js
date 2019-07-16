import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import PropTypes from 'prop-types';


class CategoriesPage extends Component {
 
  render () {
    return (
      <Text>Hello</Text>
    );
  }
}

CategoriesPage.navigationOptions = {
  header: null
};

CategoriesPage.propTypes = {
  authUser: PropTypes.object,
};

const mapStateToProps = (state) => ({
  authUser: state.authReducer.authUser
});

export default connect(mapStateToProps, null)(CategoriesPage);