import QuizResultsView from'../Views/QuizResultsView.react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import React from "react";
import {CardHeader,CardContent, Typography, Box, Divider} from '@mui/material';
import icon from '../Icons/icon.png'
import {LoginCard} from '../Components/styledComponents'
export default function QuizResultsViewController(props) {
   const {answers, userAnswers, numberOfQuestions} = props;
   let score = 0;
   for (let i=1; i <=  numberOfQuestions; i++) {
       console.log(userAnswers[i])
       if  (userAnswers[i] == answers[i]) {
           score += 1
    
       }
   }
    return (
    <div>
    <Box sx={{padding:8, px:75, flexGrow:2, overflow:"hidden",paddingRight: 20, paddingLeft: 50, borderRadius:50}}>
    <LoginCard>  
    <CardHeader avatar={<img style={{paddingLeft:"25%"}} src={icon}/>}title = {<Typography variant="h3" sx={{color:"white", alignText:"center", paddingLeft:20, fontWeight: 900}}>
            Your Score!
          </Typography>} />
          
          
        
    
    <QuizResultsView score= {<Typography variant="h1" sx={{color:"white", alignText:"center", paddingLeft:32, fontWeight: 600, fontSize:400} }>
            {score}
          </Typography>} numberOfQuestions={numberOfQuestions}
    
    /> </LoginCard> </Box>
    </div>);
}
