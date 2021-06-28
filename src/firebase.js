import firebase from 'firebase';
require('dotenv').config();

const firebaseConfig = {
    apiKey: `${process.env.API_Key}`,
    authDomain: "gituserstorage.firebaseapp.com",
    databaseURL:  process.env.databaseURL,
    projectId: "gituserstorage",
    storageBucket: "gituserstorage.appspot.com",
    messagingSenderId: "927810336071",
    appId: "1:927810336071:web:683c36ca5cb4bac6284862",
    measurementId: "G-KGS333BPGL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
