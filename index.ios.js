import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/reducers';
import AppWithNavigationState from './src/navigators/appNavigator';

import initialiseFirebase from './config/firebase';

initialiseFirebase();

// // creating the store with the combined reducers. Store is used throughout the app via dispatches
// const store = createStore(AppReducer);

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
