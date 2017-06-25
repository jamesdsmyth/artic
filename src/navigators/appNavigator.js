import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';

import ArticLanding from '../scenes/landing';
import ArticMessages from '../scenes/messages';
import ArticSingle from '../scenes/single';


// Home is the landing list of items and ListItem is clicking through
// on one of the list items. 
export const ListStack = StackNavigator({
  Home: {
    screen: ArticLanding
  },
  ListItem: {
    screen: ArticSingle,
    navigationOptions: ({ navigation }) => ({
      title: 'Users profile',
    }),
  }
});

// tab navigation
export const AppNavigator = TabNavigator({
  Home: {
    screen: ListStack
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