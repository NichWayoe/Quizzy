import TakeQuizView from '../Views/TakeQuizView.react'
import QuizView from '../Views/QuizView.react'
import React, {useState} from "react";
import QuizResultsViewController from './QuizResultsViewController.react';
import { render } from 'react-dom';

export default function TakeQuizViewController(props) {
    const [userAnswers, setUserAnswers] = useState({})
    const [finishedQuiz, setFinishedQuiz] = useState(false)
    const {quiz} = props;
    if (quiz == null){
        return <div>Loading</div>
    }
    const questions = quiz[0].getQuestions()
    const answerOptions = quiz[0].getAnswerOptions()
    const answers = quiz[0].getAnswers()
    const numberOfQuestions = quiz[0].getNumberOfQuestions()


   
    const handleRadioChange = (event)=> { 
        userAnswers[event.target.name] = event.target.value 
        console.log(userAnswers)
        setUserAnswers(userAnswers)
      };

    const questionsUI = questions.map((question, index) => {
        if (question == null){
            return null;
        }
        else {
            return (<QuizView question={question} options={answerOptions[index+1]} number={index + 1} handleRadioChange={handleRadioChange}/>)
        }

    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setFinishedQuiz(true)
      };
    return (finishedQuiz? <QuizResultsViewController answers={answers} userAnswers={userAnswers} numberOfQuestions={numberOfQuestions}></QuizResultsViewController>
    :<TakeQuizView questions = {questionsUI} onSubmit={handleSubmit}/>)
}