import React from 'react';
import { Image } from 'react-native';

import ArticStyles from '../styles/styles';

const ArticThumbnail = ({ image, keyValue, navigate }) => (
  <Image 
    style={ArticStyles.single.thumbnailImage} 
    key={keyValue} 
    source={{uri: image}} 
    onPress={() => navigate('Image', image)} 
  />
)

export default ArticThumbnail;