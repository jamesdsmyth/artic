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

import stylesArtic from '../styles/styles';

class ArticSingle extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation.state.params);
  }

  // setting the dynamic title of the page using the navigationOptions and passing the navigation which contains the state
  static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.name
  });

  render() {
    const item = this.props.navigation.state.params;

    return (
    <Container>
      <Content>
        <Image style={stylesArtic.singleArtic.imageArtic} source={{uri: item.photo}} />
        <Text>{item.about}</Text>
        <Text>{item.region}</Text>
        <Text>{item.country}</Text>
        <Text>{item.type}</Text>
        <Image style={stylesArtic.singleArtic.thumbnailImageArtic} source={{uri: item.photo}} />
        <Image style={stylesArtic.singleArtic.thumbnailImageArtic} source={{uri: item.photo}} />
        <Image style={stylesArtic.singleArtic.thumbnailImageArtic} source={{uri: item.photo}} />
        <Image style={stylesArtic.singleArtic.thumbnailImageArtic} source={{uri: item.photo}} />
        <Text>...now need to add the thumbnails with click throughs to the actual image</Text>
      </Content>
    </Container>
    )
  }
}

export default ArticSingle;