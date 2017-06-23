import React, { Component } from 'react';
import { 
  Icon
} from 'native-base';

import HeaderArtic from '../components/header';

export default class ArticLanding extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon name='home' />
    ),
    showLabel: false,
    showIcon: true
  }

  render() {
    return (
      <HeaderArtic title="Artic" />
    )
  }
}