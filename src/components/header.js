import React, { Component } from 'react';
import {
  connectStyle,
  Header,
  Body,
  Title
} from 'native-base';

import stylesArtic from '../styles/styles';

class HeaderArtic extends Component {
  render() {
    const styles = this.props.style;
    const title = this.props.title;

    return (
      <Header style={stylesArtic.headerArtic}>
        <Body>
          <Title>{title}</Title>
        </Body>
      </Header>
    )
  }
}

// connect the component to the theme
export default connectStyle('artic.CustomComponent', stylesArtic)(HeaderArtic);