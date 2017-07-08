const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const ArticStyles = {
  container: {
  },
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
    'content': {
      backgroundColor: '#ffffff',
    },
    'header': {
      height: 300
    },
    'image': {
      flex: 1,
    },
    'textBlock': {
      paddingTop: '3%',
      paddingRight: '1%',
      paddingBottom: '3%',
      paddingLeft: '1%'
    },
    'thumbnailList': {
      height: 600,
      flexDirection: 'row'
    },
    'thumbnailImage': {
      height: 200,
      width: window.width / 2
    }
  },
  // global header
  header: {
    backgroundColor: '#a8d9ff',
    height: 60
  }
}

export default ArticStyles;