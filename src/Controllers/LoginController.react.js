import firebase from '../FirebaseManager/DatabaseManager.react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import React from "react";

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
      
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
export default LoginController;