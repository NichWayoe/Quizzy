// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7AUYMyA7R8lBePahWfzqYNx33SQV0JuA",
  authDomain: "quizzy-502b8.firebaseapp.com",
  projectId: "quizzy-502b8",
  storageBucket: "quizzy-502b8.appspot.com",
  messagingSenderId: "784318139432",
  appId: "1:784318139432:web:4b9d5308a3e3c9b60db91d",
  measurementId: "G-D5N9SCVK5S"
  // apiKey: "AIzaSyCL4FnV_Kyeatz8Wp1NB4i2qMKrCKwvnvc",
  // authDomain: "bogglesolver-82bc5.firebaseapp.com",
  // projectId: "bogglesolver-82bc5",
  // storageBucket: "bogglesolver-82bc5.appspot.com",
  // messagingSenderId: "1052124738284",
  // appId: "1:1052124738284:web:a515a0148408e9fcfe6bc9",
  // measurementId: "G-E3T05L3K99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;