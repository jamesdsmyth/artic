import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  StyleProvider,
  Container,
  Content,
  Icon,
  List
} from 'native-base';

import HeaderArtic from '../components/header';
import ListItemArtic from '../components/listItem'

class ArticLanding extends Component {

  constructor(props) {
    super(props)
    // this.createRows = this.createRows.bind(this);
    console.log(props);
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Icon name='home' />
    ),
    showLabel: false,
    showIcon: true
  }

  render() {
    console.log(this.props);
    const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

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

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps)(ArticLanding);