import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import CountDownTimer from '../Components/CountDownTimer.react'
import { Component } from 'react';

export default function TakeQuizView(props) {
    const {onSubmit, questions, timeAllowed, handleTimerDidFinished} = props;
    const hours =  parseInt(timeAllowed / 60)
    const minutes =  timeAllowed % 60
    return ( <div>
        <CountDownTimer minutes={minutes} hours={hours} onTimerDidFinished={handleTimerDidFinished}/>
        <form onSubmit={onSubmit}>
            <FormControl
                sx={{ m: 3}}
                component="fieldset"
                variant="standard"
            >
                {questions}
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Submit
            </Button>
            </FormControl>
        </form>
        </div>
    )  
}