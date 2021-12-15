import React from 'react'
import {  TextField, Grid, Button } from '@mui/material';

function AddQuizForm(props) {
    const {button, onSubmitClick, onAddClick}=props
    return (
        <div>
                <Grid container item xs={12} sx={{marginLeft:40}} direction="column">
                    
                    <TextField variant="filled" placeholder="Add Question here" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Add correct option" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Add second option" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Add third option" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Add fourth option" sx={{padding:1}}/>
                    <Grid container sx={{padding:1}} spacing={20}>
                        <Grid item xs={9}>
                            <Button size="large" variant="outlined">Add Next Question</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button size="large" variant="outlined">Submit</Button>
                        </Grid>
                    </Grid>

                    </Grid> 
        </div>
    )
}

export default AddQuizForm


