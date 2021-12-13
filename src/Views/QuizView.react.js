import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function QuizView(props) {
    const {question, options, number, handleRadioChange} = props;
    return (
        <div>
          <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 ,width:"100vw"}}>
            <Paper sx={{ maxWidth: '100%', my: 1, mx: 'auto', p: 2 }}>
                <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar>{number}</Avatar>
                </Grid>
                <Grid item xs>
                    <Typography>
                      <FormLabel component="legend">{question}</FormLabel>
                      <RadioGroup
                        aria-label="quiz"
                        name={number}
                        onChange={handleRadioChange}
                      >
                        <FormControlLabel value={0} control={<Radio />} label={options[0]} name={number}/>
                        <FormControlLabel value={1}  control={<Radio />} label={options[1]} name={number}/>
                        <FormControlLabel value={2} control={<Radio />} label={options[2]} name={number}/>
                        <FormControlLabel value={3} control={<Radio />} label={options[3]} name={number}/>
                      </RadioGroup>
                    </Typography>
                </Grid>
                </Grid>
            </Paper>
        </Box>
      
          </div>
      );
     
    }