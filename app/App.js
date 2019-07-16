import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import {themeProviderStyles} from './styles/theme.style';
import Router from './navigation';
import store from './redux/store';


export default class Lilic extends Component {
  render () {
    return (
      <Provider store={store}>
        <PaperProvider theme={themeProviderStyles}>
          <Router />
        </PaperProvider>
      </Provider>
    );
  }
}