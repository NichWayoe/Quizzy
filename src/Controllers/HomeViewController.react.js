import HomeView from '../Views/HomeView.react'
import React, {useEffect, useState, useCallback} from "react";
import HomeCard from "../Components/HomeCard";
import {fetchQuizCategoriesFromDatabase} from "../FirebaseManager/DatabaseManager.react"
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

function HomeViewController(props) {
    const [quizCategoryCards, setQuizCategoryCards] = useState();
    let navigate = useNavigate();
    const onClickOnCategoryCard = useCallback(
        (category) => {
        navigate(`/home/${category.getTitle()}`);
    },[navigate])
    useEffect(() => {
        fetchQuizCategoriesFromDatabase().then((categories) => {
            console.log(categories)
            console.log(categories[0])
        const categoryCards = categories.map(category => {
            if (category === null) {
                return null
            }
            return (
            <Box sx={{ flexGrow: 2, overflow: 'hidden', padding:1, px:50 }}>
            <HomeCard title={category.getTitle()} subtitle={category.getSubtitle()} onClick={()=>onClickOnCategoryCard(category)}></HomeCard>
            </Box>
            )
        })
        setQuizCategoryCards(categoryCards) 
        })
    },[onClickOnCategoryCard])
    
    return (<HomeView categoryCards={quizCategoryCards}/>)
}
export default HomeViewController;