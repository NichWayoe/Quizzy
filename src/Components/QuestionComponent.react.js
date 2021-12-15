import { FormControl, TextField, Grid, Button } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

export default function QuestionComponent(props) {
    const {onEditAnswer, onEditQuestion,onEditAnswerOptions, number} = props

    return (
        <div>
            <Grid container spacing={5} sx={{ padding:2, height:"50%", marginLeft:40, borderRadius:"10%"}}>
                <Grid container item xs={6} direction="column">
                    <TextField required variant="filled" name={number} placeholder="Question" sx={{padding:1}} onInput={onEditQuestion}/>
                    <TextField
                        required
                        name={number}
                        label="Answer"
                        select
                        onChange={onEditAnswer}
                        helperText="Please Answer"
                        variant="filled"
                        x={{padding:1}}

                        >
                        <MenuItem key={0} value={0}>
                            0
                        </MenuItem>
                        <MenuItem key={1} value={1}>
                            1
                        </MenuItem>
                        <MenuItem key={2} value={3}>
                            2
                        </MenuItem>
                        <MenuItem key={3} value={3}>
                            3
                        </MenuItem>
                        </TextField>
                </Grid> 
                <Grid container item xs={6} direction="column">
                <TextField required name={[number, 0]} variant="filled" placeholder="Option 1" sx={{padding:1}} onInput={onEditAnswerOptions}/>
                <TextField required  name={[number, 1]}  variant="filled" placeholder="Option 2" sx={{padding:1}} onInput={onEditAnswerOptions}/>
                <TextField required  name={[number, 2]} variant="filled" placeholder="option 3" sx={{padding:1}} onInput={onEditAnswerOptions}/>
                <TextField required  name={[number, 3]}  variant="filled" placeholder="Option 4" sx={{padding:1}} onInput={onEditAnswerOptions}/>
                </Grid>
            </Grid>
        </div>
    )
}
