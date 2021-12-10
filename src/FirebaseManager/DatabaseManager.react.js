// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import QuizCategory from '../Model/QuizCategory.react'
import Quiz from '../Model/Quiz.react'
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
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const fetchQuizCategoriesFromDatabase = async() => {
  const querySnapshot = await firebase.firestore().collection('QuizCategories')
  .withConverter(QuizCategory.convertor).get()
  // eslint-disable-next-line 
  const events = querySnapshot.docs.map((doc: any) => doc.data())
  return querySnapshot.docs.map(doc => doc.data());
}

export const fetchQuizFromDatabase = async(quizID) => {
  const querySnapshot = await firebase.firestore().collection('quizzes').where('__name__', '==', quizID)
  .withConverter(Quiz.convertor).get()
  // eslint-disable-next-line 
  const events = querySnapshot.docs.map((doc: any) => doc.data())
  return querySnapshot.docs.map(doc => doc.data());
}

export const fetchAllQuizzesFromCategoryInDatabase = async(categoryTitle) => {
  const querySnapshot = await firebase.firestore().collection('quizzes').where('category', '==', categoryTitle)
  .withConverter(Quiz.convertor).get()
  // eslint-disable-next-line 
  const events = querySnapshot.docs.map((doc: any) => doc.data())
  return querySnapshot.docs.map(doc => doc.data());
}

export const uploadQuizToDatabase = async(quiz:Quiz) => {
  // eslint-disable-next-line 
  const ref = await firebase.firestore().collection('Quizzes').withConverter(Quiz.convertor).add(quiz)

}

export default firebase;