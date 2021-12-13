import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import CountDownTimer from '../Components/CountDownTimer.react'

export default function TakeQuizView(props) {
    const {onSubmit, questions, timeAllowed, handleTimerDidFinished} = props;
    const hours =  parseInt(timeAllowed / 60)
    const minutes =  timeAllowed % 60
    const styles = {
        top:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap:  "20px",
        },
        timerStyle:{
            fontSize: 20,
        },
    }
    return ( <div>
        <form onSubmit={onSubmit}>
        <div style={styles.top}>
        <CountDownTimer minutes={minutes} hours={hours} onTimerDidFinished={handleTimerDidFinished} style={styles.timerStyle}/>
        <Button sx={{ mt: 1, mr: 1 , width:150, backgroundColor:"#4A4242", color:"white", marginRight:5}} type="submit" variant="outlined">
            Submit
            </Button>
        </div>
            <FormControl
                sx={{ m: 3}}
                component="fieldset"
                variant="standard"
            >
                {questions}
            </FormControl>
        </form>
        </div>
    )  
}