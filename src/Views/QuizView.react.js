import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';



export default function QuizView(props) {
    const {question, options, number, handleRadioChange} = props;
    return (
        <div>
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
          </div>
      );
     
    }