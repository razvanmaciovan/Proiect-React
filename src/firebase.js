import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxSW_Kfwi42y0FC_Hysrj2uZejJMc4Sac",
    authDomain: "message-app-504cf.firebaseapp.com",
    projectId: "message-app-504cf",
    storageBucket: "message-app-504cf.appspot.com",
    messagingSenderId: "128070241582",
    appId: "1:128070241582:web:eab533fe45fe69a435febf"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider,db };