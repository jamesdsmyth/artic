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
    'header': {
      flex: 1/2,
    },
    'image': {
      flex: 1,
    },
    'thumbnailList': {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'flex-start'
    },
    'thumbnailImage': {
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