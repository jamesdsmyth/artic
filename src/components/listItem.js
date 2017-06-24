import React, { Dimensions } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  ListItem,
  Left,
  Body,
  Text
} from 'native-base';

const ListItemArtic = ({ item }) => (
  <ListItem>
    <Left>
      <Image source={require('../images/cat.jpg')} />
      <Body>
        <Text>NativeBase</Text>
        <Text note>GeekyAnts</Text>
      </Body>
    </Left>
    <Text>{item}</Text>
  </ListItem>
)

export default ListItemArtic;