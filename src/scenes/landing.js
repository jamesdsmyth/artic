import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  StyleProvider,
  Container,
  Content,
  Icon,
  List
} from 'native-base';

import HeaderArtic from '../components/header';
import ListItemArtic from '../components/listItem'

export default class ArticLanding extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon name='home' />
    ),
    showLabel: false,
    showIcon: true
  }

  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
       
    return (
      <Container>
        <HeaderArtic title="Artic" />
        <Content>
          <List dataArray={items} renderRow={(item) =>
            <ListItemArtic item={item} />
          }>
          </List>
        </Content>
      </Container>
    )
  }
}