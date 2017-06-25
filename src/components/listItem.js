import React, { Dimensions } from 'react';
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

import stylesArtic from '../styles/styles';

const ListItemArtic = ({ item, navigate }) => (
  <ListItem onPress={() => navigate('ListItem', {name: item.name})}>
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
        <Image style={stylesArtic.listItemArtic.imageArtic} source={{uri: item.photo}} />
      </CardItem>
      <CardItem>
        <TouchableHighlight>
        <Text note>{item.type}</Text>
        </TouchableHighlight>
      </CardItem>
    </Card>
  </ListItem>
)

export default ListItemArtic;