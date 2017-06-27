import React, { Component } from 'react';
import { Image, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  StyleProvider,
  Container,
  Content,
  Icon
} from 'native-base';

import ArticHeader from '../components/header';
import ArticListItem from '../components/listItem'

class ArticLanding extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;
    let list = [];

    for(var key in this.props.listItems) {
      list.push(this.props.listItems[key]);
    }

    return (
      <Container>
        <ArticHeader title="Artic" />
        <Content>
          <FlatList data={list}
            renderItem={({item}) => <ArticListItem item={item} navigate={navigate} />}
          />
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { listItems: state.listItems }
}

export default connect(mapStateToProps)(ArticLanding);