import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjeKZle6SX0gav4ut76rpz3zDgUDed4PM",
  authDomain: "mk-db-firebase.firebaseapp.com",
  projectId: "mk-db-firebase",
  storageBucket: "mk-db-firebase.appspot.com",
  messagingSenderId: "148596546409",
  appId: "1:148596546409:web:5cdf42ccd9924a98337bf8",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
