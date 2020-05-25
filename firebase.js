import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsrD3bwHtimhmCK86aRJHX0dyZ5wcAQUU",
    authDomain: "chicken-tinder-c7de2.firebaseapp.com",
    databaseURL: "https://chicken-tinder-c7de2.firebaseio.com",
    projectId: "chicken-tinder-c7de2",
    storageBucket: "chicken-tinder-c7de2.appspot.com",
    // messagingSenderId: "sender-id",
    appId: "1:448863157679:ios:41004e6b9c0da989a7035a",
    // measurementId: "G-measurement-id"
};

// firebase.initializeApp(firebaseConfig);
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default firebase;