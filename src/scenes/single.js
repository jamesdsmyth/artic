import React, { Component } from 'react';
import { Image, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  StyleProvider,
  Container,
  Content,
  Icon,
  Text
} from 'native-base';

import ArticThumbnail from '../components/thumbnail';

import ArticStyles from '../styles/styles';

class ArticSingle extends Component {
  constructor(props) {
    super(props);
  }

  // setting the dynamic title of the page using the navigationOptions and passing the navigation which contains the state
  static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.name
  });

  render() {
    const item = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    let  keyValue = 10;
    // to be replaced with dynamic list
    let list = ['https://s-media-cache-ak0.pinimg.com/736x/99/90/87/99908725ec2c551b7187c68d5b7644a3.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/2e/33/79/2e3379baf891c5914b79bf2feea8725b.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/8e/96/de/8e96de5625ecebd2a0c71ed8269511d5.jpg'];
    // to be replaced with dynamic list

    return (
    <Container>
      <Content>
        <Image style={ArticStyles.single.image} source={{uri: item.photo}} />
        <Text>{item.about}</Text>
        <Text>{item.region}</Text>
        <Text>{item.country}</Text>
        <Text>{item.type}</Text>
        <FlatList data={list}
          style={ArticStyles.thumbnailList}
          renderItem={({item}) => <ArticThumbnail image={item} keyValue={keyValue + 1} navigate={navigate} />}
        />
        <Text>...now need to add the thumbnails with click throughs to the actual image</Text>
      </Content>
    </Container>
    )
  }
}

export default ArticSingle;