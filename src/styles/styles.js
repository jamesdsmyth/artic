const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const ArticStyles = {
  // landing page list
  listItem: {
    'image': {
      flex: 1,
      height: 300,
      alignSelf: 'stretch'
    }
  },
  // landing page list item 
  single: {
    'image': {
      flex: 1,
      height: 400,
      alignSelf: 'stretch'
    },
    'thumbnailList': {
      flex: 1,
      width: window.width,
      justifyContent: 'flex-start',
      height: window.height,
      alignItems: 'flex-end'
    },
    'thumbnailImage': {
      width: (window.width / 2),
      height: 200
    }
  },
  // global header
  header: {
    backgroundColor: '#a8d9ff',
    height: 60
  }
}

export default ArticStyles;