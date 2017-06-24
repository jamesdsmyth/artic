import firebase from 'firebase';

export function initialiseFirebase() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB17xiF8n_5Drgzs1qkYKUu8L4MpVTRQpc",
    authDomain: "artic-58dd6.firebaseapp.com",
    databaseURL: "https://artic-58dd6.firebaseio.com",
    projectId: "artic-58dd6",
    storageBucket: "artic-58dd6.appspot.com",
    messagingSenderId: "304952139756"
  };
  firebase.initializeApp(config);
}