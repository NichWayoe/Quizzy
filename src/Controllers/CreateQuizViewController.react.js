import CreateQuizView from '../Views/CreateQuizView.react'
import React, {useEffect, useState, useCallback, useContext} from "react";
import QuestionComponent from "../Components/QuestionComponent.react"
import {fetchQuizCategoriesFromDatabase,uploadQuizToDatabase } from "../FirebaseManager/DatabaseManager.react"
import {Button} from '../Navigation/NavBarElements.react'
import Quiz from '../Model/Quiz.react';
import {UserContext} from '../Providers/UserProvider.react'
export default function CreateQuizViewController() {
    const [categories, setCategories] = useState();
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [quiz, setQuiz] = useState(new Quiz())
    const user = useContext(UserContext);

    useEffect(() => {
        fetchQuizCategoriesFromDatabase().then((value) => {
            setCategories(value)
        })
    },[])

    const onEditTitle = (event) => {
        quiz.setTitle(event.target.value)
        setQuiz(quiz)
    }

   const  onEditQuestion = (event) => {
       quiz.addQuestions(event.target.value, event.target.name)
        setQuiz(quiz)
        
    }
    const onEditAnswer = (event) => {
        quiz.setAnswers( event.target.name, event.target.value)
        setQuiz(quiz)
    }
    const onSelectCategory = (event) => {
        quiz.setCategory(event.target.value)
        setQuiz(quiz)
    }

    const onEditTimeAllowed = (event) => {
        quiz.setTimeAllowed(event.target.value)
        setQuiz(quiz)
    }


    const onEditAnswerOptions = (event) => { 
       quiz.addAnswerOptions( event.target.name[0], event.target.name[2], event.target.value )
        setQuiz(quiz)
    }

    const onEditDescription = (event) => {
        quiz.setDescription(event.target.value)
        setQuiz(quiz)
    }
    const onTapAddFieldHandler = () => {
        setNumberOfQuestions(numberOfQuestions+1)
    }
    const onTapRemoveFieldHandler = () => {
        if (numberOfQuestions != 0) {
            setNumberOfQuestions(numberOfQuestions-1)
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        quiz.setAuthor(user.displayName) 
        uploadQuizToDatabase(quiz)

    }
       
    const questionsField = [];
    for (let i = 0; i<numberOfQuestions; i++) { 
        questionsField.push(<QuestionComponent onEditAnswer={onEditAnswer} onEditQuestion={onEditQuestion} onEditAnswerOptions ={onEditAnswerOptions} number={i+1}/>)
    }

    return <CreateQuizView  onEditDescription={onEditDescription} onSubmit={onSubmit} onEditTitle={onEditTitle } onEditTimeAllowed={ onEditTimeAllowed } onSelectCategory={onSelectCategory }categories={categories} questionsField = {questionsField} onTapAddFieldHandler={onTapAddFieldHandler} onTapRemoveFieldHandler={onTapRemoveFieldHandler}/>
}