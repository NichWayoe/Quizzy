import WelcomeQuizScreenView from'../Views/WelcomeQuizScreenView.react'
import TakeQuizViewController from './TakeQuizViewController.react'
import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import { fetchQuizFromDatabase } from '../FirebaseManager/DatabaseManager.react';

export default function WelcomeQuizScreenViewController(props) {
    const [startQuiz, setStartQuiz] = useState(false);
    const [quiz, setQuiz] = useState(null);
    let params = useParams();
    useEffect(() => {
        fetchQuizFromDatabase(params.quizID).then((quiz) => {
            setQuiz(quiz)})
        },[params.quizID])

    const onClickStart = () => {
        if (startQuiz === false) {
            setStartQuiz(true)
        }
        else{
            setStartQuiz(false)
        }
    }
    return (startQuiz? <WelcomeQuizScreenView quiz={quiz} onClickStart={onClickStart}/>
                        :<TakeQuizViewController quiz={quiz}/>)

}