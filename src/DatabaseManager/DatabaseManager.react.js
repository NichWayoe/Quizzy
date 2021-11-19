// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA7AUYMyA7R8lBePahWfzqYNx33SQV0JuA",
  authDomain: "quizzy-502b8.firebaseapp.com",
  projectId: "quizzy-502b8",
  storageBucket: "quizzy-502b8.appspot.com",
  messagingSenderId: "784318139432",
  appId: "1:784318139432:web:4b9d5308a3e3c9b60db91d",
  measurementId: "G-D5N9SCVK5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);