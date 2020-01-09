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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
