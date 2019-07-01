import React, {Component} from 'react';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';

import Router from './navigation';

const store = initStore();

export default class Lilic extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}