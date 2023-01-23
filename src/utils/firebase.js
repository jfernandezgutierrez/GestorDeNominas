// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

//import firebase from "firebase/installations;
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_AuUx1u3Eh2gfzM7xnX0NOAEHwr8dWkQ",
    authDomain: "vuenominas.firebaseapp.com",
    projectId: "vuenominas",
    storageBucket: "vuenominas.appspot.com",
    messagingSenderId: "917582272267",
    appId: "1:917582272267:web:c585dd0e2baec591d6b40e"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Utils
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

//Eports
export {auth,storage,db}