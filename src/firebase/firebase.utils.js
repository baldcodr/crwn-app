import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-tWsYzJjbq8gnGeVAzaZqGJJqxXNA20w",
  authDomain: "crwn-app-6cd23.firebaseapp.com",
  databaseURL: "https://crwn-app-6cd23.firebaseio.com",
  projectId: "crwn-app-6cd23",
  storageBucket: "crwn-app-6cd23.appspot.com",
  messagingSenderId: "595989328016",
  appId: "1:595989328016:web:4bf295f4c0016abf162815"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
