import { FormControl, TextField, Grid, Button } from '@mui/material';
import InformationComponent from "../Components/InformationComponent.react"
import React, { useState } from 'react';

export default function CreateQuizView() {
    const [flag, setFlag] = useState(false);
    const [title,setTitle]=useState("Add Quiz Information")
    return <div>
        <h1 style={{marginLeft:"40%", color:"red"}}>{title}</h1>
        <FormControl >
            {flag?<InformationComponent/>: <TextField/> }
            
        </FormControl>
    </div>

}