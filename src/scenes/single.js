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

import HeaderArtic from '../components/header';
import ListItemArtic from '../components/listItem'

const ArticSingle = () => (
  <Container>
    <Text>single</Text>
  </Container>
);

export default ArticSingle;