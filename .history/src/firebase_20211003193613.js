//import firebase from "firebase/app";
//import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";

/*const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}); */

const firebaseConfig = {
  apiKey: "AIzaSyAcGjaQpRGmfCeg9JF_pgugSJaCYI7TON8",
  authDomain: "color-palette-1cfbd.firebaseapp.com",
  projectId: "color-palette-1cfbd",
  storageBucket: "color-palette-1cfbd.appspot.com",
  messagingSenderId: "567599328656",
  appId: "1:567599328656:web:50c6a637a0db520661d715"
};

export const auth = getAuth()

export default app