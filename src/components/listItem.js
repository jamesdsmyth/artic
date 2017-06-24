import React, { Dimensions } from 'react';
import { Image, StyleSheet } from 'react-native';
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

const ListItemArtic = ({ item }) => (
  <ListItem>
    <Card >
      <CardItem>
        <Left>
          <Thumbnail source={require('../images/cat.jpg')} />
          <Body>
            <Text>Aliya MUA</Text>
            <Text note>Dubai</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image style={stylesArtic.listItemArtic.imageArtic} source={require('../images/cat.jpg')}/>
      </CardItem>
      <CardItem>
        <Text note>Arab / Asian / Western</Text>
      </CardItem>
    </Card>
  </ListItem>
)

export default ListItemArtic;