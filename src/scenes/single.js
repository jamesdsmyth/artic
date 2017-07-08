import React, { Component } from 'react';
import { Image, FlatList, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  StyleProvider,
  Card,
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
    
    // to be replaced with dynamic list
    let list = ['https://s-media-cache-ak0.pinimg.com/736x/99/90/87/99908725ec2c551b7187c68d5b7644a3.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/2e/33/79/2e3379baf891c5914b79bf2feea8725b.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/8e/96/de/8e96de5625ecebd2a0c71ed8269511d5.jpg'];
    // to be replaced with dynamic list

    return (
    <Container style={ArticStyles.container}>
      <Content style={ArticStyles.single.content}>
        <View style={ArticStyles.single.header}>
          <Image style={ArticStyles.single.image} source={{uri: item.photo}} />
        </View>
        <View style={ArticStyles.single.textBlock}>
          <Text>{item.about}</Text>
          <Text>{item.region}</Text>
          <Text>{item.country}</Text>
          <Text>{item.type}</Text>
        </View>
        <FlatList 
          style={ArticStyles.single.thumbnailList} 
          data={list}
          key={"flatlistexample"}
          renderItem={({item}) => <ArticThumbnail image={item} navigate={navigate} />}
        />
      </Content>
    </Container>
    )
  }
}

export default ArticSingle;