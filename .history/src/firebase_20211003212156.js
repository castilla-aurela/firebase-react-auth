//import firebase from "firebase/app";
//import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/*const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}); */

const firebaseConfig = {
  apiKey: "AIzaSyCZGhqcf1oTmfmhmQYQCC6bL-8i3J9t52g",
  authDomain: "auth-development-35654.firebaseapp.com",
  projectId: "auth-development-35654",
  storageBucket: "auth-development-35654.appspot.com",
  messagingSenderId: "315802330499",
  appId: "1:315802330499:web:d5689e3e85b38768e6c2b6"
};

export const app = initializeApp(firebaseConfig);

export default getAuth()