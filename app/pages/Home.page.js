import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../components/Home/Home.component';
// import {auth} from '../../services/authentication.service';


class HomePage extends Component {

  state = {currentUser: null};

  componentDidMount () {
    // const {currentUser} = auth();
    // this.setState({currentUser});
  }
  render () {
    return (
      <Home />
    );
  }
}

HomePage.navigationOptions = {
  header: null
};

// HomePage.propTypes = {
//   testAction: PropTypes.func,
//   test: PropTypes.string,
// };

export default connect(null, null)(HomePage);