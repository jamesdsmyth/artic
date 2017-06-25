import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/reducers';
import AppWithNavigationState from './src/navigators/appNavigator';

import initialiseFirebase from './config/firebase';

initialiseFirebase();

class artic extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('artic', () => artic);

export default artic;
