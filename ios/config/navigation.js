import { TabNavigator } from 'react-navigation';
import ArticLanding from '../scenes/landing';
import ArticMessages from '../scenes/messages';

// app navigation
const navigation = {
  Home: {
    screen: ArticLanding
  },
  Messages: {
    screen: ArticMessages
  }
}

// app navigation config
const navigationOptions = {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    tabBarPosition: 'bottom'
  }
}

const articApp = TabNavigator(navigation, navigationOptions);

export default articApp;