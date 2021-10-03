import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_,
  authDomain: "auth-development-35654.firebaseapp.com",
  projectId: "auth-development-35654",
  storageBucket: "auth-development-35654.appspot.com",
  messagingSenderId: "315802330499",
  appId: "1:315802330499:web:d5689e3e85b38768e6c2b6",
});
