import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

export default function TakeQuizView(props) {
    const {onSubmit, questions} = props;
    return ( <div>
        <form onSubmit={onSubmit}>
            <FormControl
                sx={{ m: 3 }}
                component="fieldset"x
                variant="standard"
            >
                {questions}
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Submit
            </Button>
            </FormControl>
        </form>
        </div>
    )  
}