import { combineReducers, createStore } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/appNavigator';

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

function listItems(state = {}, action = {}) {
  let newState = null;

  switch(action.type) {
    case 'POPULATE_LIST':
      newState = Object.assign({}, state, action.data);
    }

  // Simply return the original 'state' if 'nextState' is null or undefined.
  return newState || state;
}

const AppReducer = combineReducers({
  navReducer,
  listItems
});

export default store = createStore(AppReducer);