import React from 'react'
import { FormControl, TextField, Grid, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

function InformationComponent(props) {
    const {onEditDescription, onEditTitle, onEditAnswer, onEditTimeAllowed, onSelectCategory, categories} = props
    console.log(onEditTitle)
    console.log(onEditDescription)
    if (categories == null){
        return <div>Load</div>
    }

    return (
        <div>
            <Grid container spacing={5} sx={{ padding:2, height:"50%", marginLeft:40, borderRadius:"10%"}}>
                <Grid container item xs={6} direction="column">
                    <TextField required variant="filled" placeholder="Title" sx={{padding:1}} onInput={onEditTitle}/>
                    <TextField
                        required
                        id="outlined-select-currency"
                        select
                        label="Select Category"
                        onChange={onSelectCategory}
                        helperText="Please select category"
                        variant="filled"
                        x={{padding:1}}
                        >
                        {props.categories.map((category) => (
                            <MenuItem key={category.getTitle()} value={category.getTitle()}>
                            {category.getTitle()}
                            </MenuItem>
                        ))}
                        </TextField>
                    <TextField required variant="filled" placeholder="Description" sx={{padding:1}} onInput={onEditDescription}/>
                    </Grid> 
                <Grid container item xs={6} direction="column">
                <TextField required variant="filled" placeholder="Allowed Time" sx={{padding:1}} onInput={onEditTimeAllowed}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default InformationComponent

