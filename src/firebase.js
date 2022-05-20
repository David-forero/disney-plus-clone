// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYd_ne65E_B5OE6FM1EBdhfMZHBY7m_CA",
  authDomain: "disney-plus-clone-67796.firebaseapp.com",
  projectId: "disney-plus-clone-67796",
  storageBucket: "disney-plus-clone-67796.appspot.com",
  messagingSenderId: "1022856475295",
  appId: "1:1022856475295:web:86963ab7d33c18433768aa",
  measurementId: "G-M4TS6N9Y6H"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export {auth, provider, storage}
export default db