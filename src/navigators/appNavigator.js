import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

// import LoginScreen from '../components/LoginScreen';
// import MainScreen from '../components/MainScreen';
// import ProfileScreen from '../components/ProfileScreen';

import ArticLanding from '../../ios/scenes/landing';
import ArticMessages from '../../ios/scenes/messages';

export const AppNavigator = TabNavigator({
  Home: {
    screen: ArticLanding
  },
  Messages: {
    screen: ArticMessages
  }
});

// app navigation config
const navigationOptions = {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    tabBarPosition: 'bottom'
  }
}

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);