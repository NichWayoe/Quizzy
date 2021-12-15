import { FormControl, TextField, Grid, Button } from '@mui/material';
import InformationComponent from "../Components/InformationComponent.react"
import React, { useState } from 'react';

export default function CreateQuizView(props) {
    const {onEditTitle, onEditDescription, onEditAnswer, onEditTimeAllowed, onSelectCategory, questionsField, onTapAddFieldHandler, onTapRemoveFieldHandler, onSubmit, categories} = props  
    console.log(onSubmit)
    return (<div>
        <h1 style={{marginLeft:"40%", color:"red"}}>{"Add ypur quiz"}</h1>
        <form onSubmit={onSubmit}>
        <Button sx={{ mt: 1, mr: 1 , width:150, backgroundColor:"#4A4242", color:"white", marginRight:5}} type="submit" variant="outlined">
            Submit
            </Button>
       
        <FormControl sx={{ m: 3}}
                component="fieldset"
                variant="standard">
            <InformationComponent onEditDescription={onEditDescription} onEditTitle={onEditTitle} onEditAnswer={onEditAnswer} onEditTimeAllowed={onEditTimeAllowed} onSelectCategory={onSelectCategory} categories={categories}/>
            {questionsField}
            <Button onClick={onTapAddFieldHandler}>+</Button>
            <Button onClick={onTapRemoveFieldHandler}>x</Button>

        </FormControl>
        </form>
    </div>)

}