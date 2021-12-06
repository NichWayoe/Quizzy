import HomeView from '../Views/HomeView.react'
import React, {useEffect, useState} from "react";
import {fetchQuizCategoriesFromDatabase} from "../FirebaseManager/DatabaseManager.react"

function HomeViewController(props) {
    const [quizCategories, setQuizCategories] = useState();
    useEffect(() => {
        fetchQuizCategoriesFromDatabase().then((value) => setQuizCategories(value))
    },[])
    console.log(quizCategories)
    return (<HomeView quizCategories={quizCategories}/>)
}
export default HomeViewController;