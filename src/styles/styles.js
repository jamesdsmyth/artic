const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const stylesArtic = {
  // landing page list
  listItemArtic: {
    'imageArtic': {
      flex: 1,
      height: 300,
      alignSelf: 'stretch'
    }
  },
  // landing page list item 
  singleArtic: {
    'imageArtic': {
      flex: 1,
      height: 400,
      alignSelf: 'stretch'
    },
    'thumbnailImageArtic': {
      flex: 1,
      width: (window.width / 2),
      height: 200,
      alignSelf: 'stretch',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  },
  // global header
  headerArtic: {
    backgroundColor: '#a8d9ff',
    height: 60
  }
}

export default stylesArtic;