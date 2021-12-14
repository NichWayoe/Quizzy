import { FormControl, TextField, Grid, Button } from '@mui/material';
import InformationComponent from "../Components/InformationComponent.react"
import AddQuizForm from "../Components/AddQuizForm.react"
import React, { useState } from 'react';

export default function CreateQuizView() {
    const [flag, setFlag] = useState(true);
    const [title,setTitle]=useState("Add Quiz Information")
    const [button, setButton]= useState("Next")
    function handleOnclick(e){
        setFlag(false)
        if (flag){
            setButton("Next")
            setTitle("Add Quiz Information")
        }
        else{
            setButton("Submit")
            setTitle("Add quiz questions")
        }
    }
        return <div>
        <h1 style={{color:"red", marginLeft:"40%"}}>{title}</h1>
        <FormControl >
            {flag?<InformationComponent onClick={handleOnclick} button={button}/>: <AddQuizForm onClick={handleOnclick}/> }
        </FormControl>
    </div>

}