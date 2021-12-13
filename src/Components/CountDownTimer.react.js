import React,{useEffect, useState} from 'react'

export default function CountDownTimer(props) {
    const { hours = 0, minutes = 0, seconds = 60, onTimerDidFinished, style} = props;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    const tick = () => {
        if (hrs === 0 && mins === (0 && secs === 0)) {
            onTimerDidFinished()
        } 
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div style={style}>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

