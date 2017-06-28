import firebase from 'firebase';
import store from '../src/reducers/index';
let firebaseApp = null;
let storage = null;
let itemsRef = null;

// Initializing Firebase
export default function initialiseFirebase() {
  const config = {
    apiKey: "AIzaSyB17xiF8n_5Drgzs1qkYKUu8L4MpVTRQpc",
    authDomain: "artic-58dd6.firebaseapp.com",
    databaseURL: "https://artic-58dd6.firebaseio.com",
    projectId: "artic-58dd6",
    storageBucket: "artic-58dd6.appspot.com",
    messagingSenderId: "304952139756"
  }

  firebaseApp = firebase.initializeApp(config);
  storage = firebase.storage();
  itemsRef = firebaseApp.database().ref('users');

  itemsRef.on('value', (snapshot) => {

    let newSnapshot = snapshot.val() || [];
    let itemArray = [];
    let keyValue = 0;

    for (item in newSnapshot) {
      let arrayItem = newSnapshot[item];
      arrayItem.key = keyValue + 1;
      itemArray.push(arrayItem);
    }

    store.dispatch({
      type: 'POPULATE_LIST',
      data: itemArray
    });
  });
}