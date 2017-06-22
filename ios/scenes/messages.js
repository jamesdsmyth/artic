import React, { Component } from 'react';
import { Button } from 'react-native';
import { 
  Icon
} from 'native-base';

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
      <Button
        onPress={() => this.props.navigation.goBack()}
        title='Go back home'
      />
    )
  }
}