import firebase from "firebase";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7Y3MPCxcoMtETOVSvg-sbUhTmCiGMFEQ",
    authDomain: "chatapp-bb31d.firebaseapp.com",
    databaseURL: "https://chatapp-bb31d.firebaseio.com",
    projectId: "chatapp-bb31d",
    storageBucket: "chatapp-bb31d.appspot.com",
    messagingSenderId: "778102087406",
    appId: "1:778102087406:web:5493e17cd86c2b7d4e5dff",
    measurementId: "G-R7S86JZ2H7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;