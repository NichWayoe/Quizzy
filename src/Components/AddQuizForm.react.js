import React from 'react'
import { FormControl, TextField, Grid, Button } from '@mui/material';

function AddQuizForm(props) {
    const {button, onClick}=props
    return (
        <div>
               <Grid container spacing={5} sx={{ padding:2, height:"50%", marginLeft:40, borderRadius:"10%"}}>
                <Grid container item xs={12} direction="column">
                    
                    <TextField variant="filled" placeholder="Add Question here" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Add correct option" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Add second option" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Add third option" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Add fourth option" sx={{padding:1}}/>
                    <Button variant="outlined" onClick={onClick}>{button}</Button>

                    </Grid> 
                </Grid>
        </div>
    )
}

export default AddQuizForm


