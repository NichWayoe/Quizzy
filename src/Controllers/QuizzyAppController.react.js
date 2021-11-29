import LoginController from './LoginController.react'
import HomeViewController from './HomeViewController.react'
import React, {useContext} from "react";
import UserContext from '../Providers/UserProvider.react'

function QuizzyAppController(props) {
    const user = useContext(UserContext);
    return (
        user? <HomeViewController></HomeViewController>
        : <LoginController></LoginController>
    )

}
export default QuizzyAppController;