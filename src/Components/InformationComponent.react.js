import React from 'react'
import { FormControl, TextField, Grid, Button } from '@mui/material';
function InformationComponent() {
    return (
        <div>
            <Grid container spacing={5} sx={{ padding:2, height:"50%", marginLeft:40, borderRadius:"10%"}}>
                <Grid container item xs={6} direction="column">
                    
                    <TextField variant="filled" placeholder="First Name" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Category" sx={{padding:1}}/>
                    <TextField variant="filled" placeholder="Description" sx={{padding:1}}/>

                    </Grid> 
                <Grid container item xs={6} direction="column">
                <TextField variant="filled" placeholder="Last Name" sx={{padding:1}}/>
                <TextField variant="filled" placeholder="Allowed Time" sx={{padding:1}}/>
                <TextField variant="filled" placeholder="Title" sx={{padding:1}}/>
                <Button variant="outlined" sx={{padding:1, marginTop:10}}> Next</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default InformationComponent

