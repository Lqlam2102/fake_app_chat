// import firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyApO5YmNXR9PyJySRDOIwZwr3rg-V9I2uI",
  authDomain: "fake-chat-app-a6b56.firebaseapp.com",
  projectId: "fake-chat-app-a6b56",
  storageBucket: "fake-chat-app-a6b56.appspot.com",
  messagingSenderId: "561017438106",
  appId: "1:561017438106:web:f7beda697ada5893970423",
  measurementId: "G-BP03K7FHCS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
export { db, auth };
export default firebase;
