import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDL5Xy6RJTkipA06NSxM5o1F5uutdL8clA",
  authDomain: "uber-eats-9b4da.firebaseapp.com",
  projectId: "uber-eats-9b4da",
  storageBucket: "uber-eats-9b4da.appspot.com",
  messagingSenderId: "790863917034",
  appId: "1:790863917034:web:ed188106b50cfbdae28c93"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;