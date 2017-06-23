import React, { Component } from 'react';
import { 
  Container, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Icon 
} from 'native-base';

export default class FooterArtic extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="home" />
          </Button>
          <Button>
            <Icon name="search" />
          </Button>
          <Button active>
            <Icon active name="chatbubbles" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}