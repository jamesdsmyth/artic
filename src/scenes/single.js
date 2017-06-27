import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  StyleProvider,
  Container,
  Content,
  Icon,
  List,
  Text
} from 'native-base';

import HeaderArtic from '../components/header';

class ArticSingle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.navigation.state.params;

    return (
    <Container>
      <Text>{item.about}</Text>
    </Container>
    )
  }
}

export default ArticSingle;