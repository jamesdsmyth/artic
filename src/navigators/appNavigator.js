import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';

import ArticLanding from '../scenes/landing';
import ArticMessages from '../scenes/messages';
import ArticSingle from '../scenes/single';
import ArticImage from '../scenes/image';


// Home is the landing list of items and ListItem is clicking through
// on one of the list items. 
export const ListStack = StackNavigator({
  Home: {
    screen: ArticLanding,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name='home' />
      ),
      showLabel: false,
      showIcon: true
    }
  },
  Single: {
    screen: ArticSingle,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name='home' />
      ),
      showLabel: false,
      showIcon: true
    }
  },
  Image: {
    screen: ArticImage,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name='home' />
      ),
      showLabel: false,
      showIcon: true
    }
  }
});

// tab navigation
export const AppNavigator = TabNavigator({
  Home: {
    screen: ListStack,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Messages: {
    screen: ArticMessages,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='chatbubbles' />
      ),
      showLabel: false,
      showIcon: true
    }
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
  nav: state.navReducer
});

export default connect(mapStateToProps)(AppWithNavigationState);