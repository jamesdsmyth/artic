import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
  AppRegistry
} from 'react-native';

import { 
  Container,
  Content
} from 'native-base';

import FooterArtic from './ios/components/footer';
import HeaderArtic from './ios/components/header';

// need to read this - 
// https://medium.com/@parkerdan/react-navigation-with-complete-redux-state-management-tab-bar-and-multiple-navigators-ed30a69d9a4d

export default class artic extends Component {
  render() {
    return (
      <Container>
        <HeaderArtic />
        <Content />
        <FooterArtic />
      </Container>
    );
  }
}

AppRegistry.registerComponent('artic', () => artic);
