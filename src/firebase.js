import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAeC-cA6yYm5Fi2NqBFktZadWVvEKxztQ",
    authDomain: "quto-indonesia.firebaseapp.com",
    databaseURL: "https://quto-indonesia-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quto-indonesia",
    storageBucket: "quto-indonesia.appspot.com",
    messagingSenderId: "19578788721",
    appId: "1:19578788721:web:1278b5bd9a51a817ca74d0",
    measurementId: "G-XHQPKZVE1K"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;