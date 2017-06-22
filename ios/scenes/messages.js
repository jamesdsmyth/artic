import React, { Component } from 'react';
import { Button } from 'react-native';
import { 
  Icon
} from 'native-base';

import HeaderArtic from '../components/header';

export default class ArticMessages extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='chatbubbles' />
    ),
    showLabel: false,
    showIcon: true
  }

  render() {
    return (
      <HeaderArtic title="Messages" />
    )
  }
}