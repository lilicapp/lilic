import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Home from '../components/Home/Home.component';


class HomePage extends Component {
 
  render () {
    if (this.props.authUser)
      console.log('hola', this.props.authUser);
    return (
      <Home />
    );
  }
}

HomePage.navigationOptions = {
  header: null
};

HomePage.propTypes = {
  authUser: PropTypes.object,
};

const mapStateToProps = (state) => ({
  authUser: state.authReducer.authUser
});

export default connect(mapStateToProps, null)(HomePage);