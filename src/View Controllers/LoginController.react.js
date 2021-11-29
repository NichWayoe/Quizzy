import firebase from "../FirebaseManager/DatabaseManager.react.js"
import React, { useState, useEffect} from "react";

var firebaseui = require('firebaseui');

var ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
    uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
  },
}


function LoginController() {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false);
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        setUserIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  if (!userIsSignedIn) {
    ui.start('#firebaseui-auth-container', uiConfig);
    return (
        <div>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
        </div>
    );
  }
  return (
    <HomeViewController></HomeViewController>
  );
}
export default LoginController;