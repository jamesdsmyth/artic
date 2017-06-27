import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import {
  ListItem,
  Left,
  Body,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Button
} from 'native-base';

import ArticStyles from '../styles/styles';

const ArticListItem = ({ item, navigate }) => (
  <ListItem onPress={() => navigate('Single', item)}>
    <Card >
      <CardItem>
        <Left>
          <Thumbnail source={{uri: item.photo}} />
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.region}, {item.country}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image style={ArticStyles.listItem.image} source={{uri: item.photo}} />
      </CardItem>
      <CardItem>
        <TouchableHighlight>
        <Text note>{item.type}</Text>
        </TouchableHighlight>
      </CardItem>
    </Card>
  </ListItem>
)

export default ArticListItem;