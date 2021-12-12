import {Button} from '../Navigation/NavBarElements.react'
export default function WelcomeQuizScreenView(props) {
    //ui for overview of the test like time available, author of test, etc
    // it also has a start button
    const {quiz, onClickStart} = props;
    if (quiz) {
        return(<div>
            <h1>{quiz[0].getTitle()}</h1>
            <h2>Time Allowed: {quiz[0].getTimeAllowed()} minutes</h2>
            <h2>{quiz[0].getDescription()}</h2>
            <h2>By: {quiz[0].getAuthor()}</h2>
            <Button onClick={onClickStart}>Start</Button>
        </div>)
    } 
    else {
    return (<h1>Loading</h1>)
    }
}