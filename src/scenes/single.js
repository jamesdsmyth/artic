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
import ListItemArtic from '../components/listItem'

class ArticSingle extends Component {

  constructor(props) {
    super(props)
  }

  // static navigationOptions = {
  //   tabBarIcon: () => (
  //     <Icon name='home' />
  //   ),
  //   showLabel: false,
  //   showIcon: true
  // }

  render() {
    return (
      <Container>
        <Text>single</Text>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { listItems: state.listItems }
}

export default connect(mapStateToProps)(ArticSingle);