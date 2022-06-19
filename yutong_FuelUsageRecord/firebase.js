import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyB2XwG6wIHxFMvWupwI4fPkPKLchf8a0Oc",
  authDomain: "info6132-4983f.firebaseapp.com",
  projectId: "info6132-4983f",
  storageBucket: "info6132-4983f.appspot.com",
  messagingSenderId: "460671519501",
  appId: "1:460671519501:web:e2fee602934047d3667e44",
  measurementId: "G-DGMMFZM0S8"
};




  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }

  const auth = firebase.auth();
  
  export {auth };