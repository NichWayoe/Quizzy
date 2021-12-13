import firebase from '../FirebaseManager/DatabaseManager.react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import React from "react";
import {CardHeader,CardContent, Typography, Box, Divider} from '@mui/material';
import icon from '../Icons/icon.png'
import {LoginCard} from '../Components/styledComponents'
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

function LoginController() {
  return (
    <div>
 
      <Box sx={{padding:5, px:60, flexGrow:2, overflow:"hidden",paddingRight: 20, paddingLeft: 50}}>  
      <LoginCard>

        <CardHeader avatar={<img style={{paddingLeft:"25%"}} src={icon}/>}title = {<Typography variant="h5" sx={{color:"white", alignText:"center", paddingLeft:10, borderRadius: 30, fontWeight: 900}}>
            Welcome to Quizzy!
          </Typography>} />
          <Divider sx={{bgcolor:"white"}}/>
          
        
        <CardContent>
        <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()} /></CardContent>
        </LoginCard>
      </Box>
    </div>
  );
}
export default LoginController;
