import firebase from 'firebase';

let firebaseApp = null;
let storage = null;
let itemsRef = null;

export default function initialiseFirebase() {
  // Initialize Firebase

  var config = {
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
    let newSnapshot = null;

    setTimeout(() => {
      newSnapshot = snapshot.val() || [];
      console.log(newSnapshot);
    }, 0);

    // console.log('the new snapshot is', newSnapshot);

    // var items = [];
    for (item in newSnapshot) {
      let arrayItem = newSnapshot[item];

      console.log(arrayItem);

    //   items.push({
    //     mealId: item,
    //     mealName: meal.mealName,
    //     mealPriceAED: meal.mealPriceAED,
    //     chefId: meal.chefId,
    //     cuisineType: meal.cuisineType,
    //     description: meal.description,
    //     photo: meal.photo,
    //     photoUrl: meal.photoUrl,
    //     portionsAvailable: meal.portionsAvailable,
    //   });
    }

    // store.dispatch(actions.populateMeals(items));
  });
}