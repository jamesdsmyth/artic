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
  }

  render() {
    const {navigate} = this.props.navigation;
    let list = [];

    for(var key in this.props.listItems) {
      list.push(this.props.listItems[key]);
    }

    return (
      <Container>
        <HeaderArtic title="Artic" />
        <Content>
          <List dataArray={list} renderRow={(item) =>
            <ListItemArtic item={item} navigate={navigate} />
          }>
          </List>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { listItems: state.listItems }
}

export default connect(mapStateToProps)(ArticLanding);