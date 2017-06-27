import React from 'react';
import { Image } from 'react-native';

const ArticImage = ({ image }) => (
  <Image source={{uri: image}} />
)

export default ArticImage;