import CategoryDetailView from '../Views/CategoryDetailView'
import React, {useEffect, useState} from "react";
import {fetchAllQuizzesFromCategoryInDatabase} from "../FirebaseManager/DatabaseManager.react"
import {useParams } from "react-router-dom";
import HomeCard from "../Components/HomeCard"; 

export default function CategoryDetailViewController() {
    const [QuizCards, setQuizCards] = useState()
    let params = useParams();
    useEffect(() => {
        fetchAllQuizzesFromCategoryInDatabase(params.categoryTitle).then((quizzes) => {
        const quizCards = quizzes.map(quiz => {
            if (quiz === null) {
                return null
            }
            return (<HomeCard title={quiz.getTitle()} subtitle={quiz.getCategory()} onClick={()=>{}}></HomeCard>)
        })
        setQuizCards(quizCards) 
        })
    },[params.categoryTitle])
    return <CategoryDetailView quizzes={QuizCards}/>
}