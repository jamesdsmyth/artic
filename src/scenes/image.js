import React from 'react';
import { Image } from 'react-native';

const ArticImage = ({ image }) => (
  <Image key={image} source={{uri: image}} />
)

export default ArticImage;