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
    let list = ['https://dummyimage.com/600x400/000/fff.jpg&text=1', 'https://dummyimage.com/600x400/cc2bcc/ffffff.jpg', 'https://dummyimage.com/600x400/45cc2d/ffffff.jpg'];
    // to be replaced with dynamic list

    return (
    <Container style={ArticStyles.container}>
      <Content style={ArticStyles.single.content}>
        <View style={ArticStyles.single.header}>
          <Image style={ArticStyles.single.image} source={{uri: item.photo}} />
        </View>
        <View style={ArticStyles.single.textBlock}>
          <Text>{item.type}</Text>
          <Text style={ArticStyles.single.textBlock.location}>{item.region}, {item.country}</Text>
          <Text>{item.about}</Text>    
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