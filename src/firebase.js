import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUwiC2IR7GB0-wgCHFXXmPnSxQF7-399U",
    authDomain: "gituserstorage.firebaseapp.com",
    projectId: "gituserstorage",
    storageBucket: "gituserstorage.appspot.com",
    messagingSenderId: "927810336071",
    appId: "1:927810336071:web:683c36ca5cb4bac6284862",
    measurementId: "G-KGS333BPGL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();