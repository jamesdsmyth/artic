import { combineReducers, createStore } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/appNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Messages');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  console.log(nextState);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

function listItems(state = {}, action = {}) {
  let newState = null;

  switch(action.type) {
    case 'POPULATE_LIST':
      newState = Object.assign({}, state, action.data);
    }

  console.log(newState);
  // Simply return the original 'state' if 'nextState' is null or undefined.
  return newState || state;
}

const AppReducer = combineReducers({
  nav,
  auth,
  listItems
});

// creating the store with the combined reducers. Store is used throughout the app via dispatches
export default store = createStore(AppReducer);

// export default store;