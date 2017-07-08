import React from 'react';
import { Image } from 'react-native';

import ArticStyles from '../styles/styles';

const ArticThumbnail = ({ image, navigate }) => (
  <Image 
    style={ArticStyles.single.thumbnailImage} 
    key={image} 
    source={{uri: image}}
    onPress={() => alert('clicked')}
  />
)

export default ArticThumbnail;