import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: "auth-development-35654",
  storageBucket: "auth-development-35654.appspot.com",
  messagingSenderId: "315802330499",
  appId: "1:315802330499:web:d5689e3e85b38768e6c2b6",
});
