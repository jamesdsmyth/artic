import React, { Component } from 'react';
import { 
  Button, 
  Icon,
  Header,
  Left,
  Right,
  Body,
  Title
} from 'native-base';

export default class HeaderArtic extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Artic</Title>
        </Body>
        <Right>
          <Button transparent>
              <Icon name='menu' />
          </Button>
        </Right>
      </Header>
    )
  }
}