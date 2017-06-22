// import { AppRegistry } from 'react-native';
// import articApp from './ios/config/navigation';

// AppRegistry.registerComponent('artic', () => articApp);




/**
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/appNavigator';

class artic extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('artic', () => artic);

export default artic;
