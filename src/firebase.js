import firebase from 'firebase';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC3Rd0P2hqjEWxtrOz3RZqXr2oatz2OL28',
  authDomain: 'finance-app-f37d2.firebaseapp.com',
  projectId: 'finance-app-f37d2',
  storageBucket: 'finance-app-f37d2.appspot.com',
  messagingSenderId: '668088721000',
  appId: '1:668088721000:web:bf1946c4d44864aa40a5dd',
  measurementId: 'G-JBHQ35TP0J',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
