import React, { Component } from 'react';
import {
  connectStyle,
  Header,
  Body,
  Title
} from 'native-base';

import ArticStyles from '../styles/styles';

class ArticHeader extends Component {
  render() {
    const styles = this.props.style;
    const title = this.props.title;

    return (
      <Header style={ArticStyles.header}>
        <Body>
          <Title>{title}</Title>
        </Body>
      </Header>
    )
  }
}

// connect the component to the theme
export default connectStyle('artic.CustomComponent', ArticStyles)(ArticHeader);