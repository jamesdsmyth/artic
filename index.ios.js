import React, { Component } from 'react';
import { AppRegistry, Button } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import { 
  Container,
  Content,
  Icon
} from 'native-base';

import FooterArtic from './ios/components/footer';
import HeaderArtic from './ios/components/header';

// need to read this - 
// https://medium.com/@parkerdan/react-navigation-with-complete-redux-state-management-tab-bar-and-multiple-navigators-ed30a69d9a4d

class ArticLanding extends Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: () => (
      <Icon name='home' />
    ),
    showLabel: false,
    showIcon: true
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Messages')}
        title='Go to Messages'
      />
    )
  }
}

class ArticMessages extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='chatbubbles' />
    ),
    showLabel: false,
    showIcon: true
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title='Go back home'
      />
    )
  }
}

const artic = TabNavigator({
  Home: {
    screen: ArticLanding,
  },
  Messages: {
    screen: ArticMessages,
  },
  }, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

AppRegistry.registerComponent('artic', () => artic);
