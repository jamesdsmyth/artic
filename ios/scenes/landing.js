import React, { Component } from 'react';
import { Button } from 'react-native';
import { 
  Icon
} from 'native-base';

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
      <Button
        onPress={() => this.props.navigation.navigate('Messages')}
        title='Go to Messages'
      />
    )
  }
}