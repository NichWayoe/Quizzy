import CategoryDetailView from '../Views/CategoryDetailView'
import React, {useEffect, useState, useCallback} from "react";
import {fetchAllQuizzesFromCategoryInDatabase} from "../FirebaseManager/DatabaseManager.react"
import {useParams, useNavigate } from "react-router-dom";
import HomeCard from "../Components/HomeCard"; 

export default function CategoryDetailViewController() {
    const [QuizCards, setQuizCards] = useState()
    let params = useParams();
    let navigate = useNavigate();
    const onClickOnQuizCard = useCallback(
        (quiz) => {
        navigate(`/quiz/${quiz.getID()}`);
    },[navigate])
    useEffect(() => {
        fetchAllQuizzesFromCategoryInDatabase(params.categoryTitle).then((quizzes) => {
        const quizCards = quizzes.map(quiz => {
            if (quiz === null) {
                return null
            }
            return (
            <div style={{marginLeft:100, marginTop:40}}>
                            <HomeCard  title={quiz.getTitle()} subtitle={quiz.getCategory()} onClick={()=>{ onClickOnQuizCard(quiz)}}>
                            
                            </HomeCard>
                            </div>)

            
        })
        setQuizCards(quizCards) 
        })
    },[params.categoryTitle, onClickOnQuizCard])
    return <CategoryDetailView quizzes={QuizCards}/>
}