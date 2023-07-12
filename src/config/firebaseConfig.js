import { initializeApp } from "firebase/app";

// My Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVMTX5y-iXx7ZEUnKUbyo77-qe2CTTQ9g",
  authDomain: "mkp-portfolio-db.firebaseapp.com",
  projectId: "mkp-portfolio-db",
  storageBucket: "mkp-portfolio-db.appspot.com",
  messagingSenderId: "761035253598",
  appId: "1:761035253598:web:f4091589f43fe4c53891cf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
