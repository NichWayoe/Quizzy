import {Button} from '../Navigation/NavBarElements.react'
import obj from '../images/obj.jpg'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function WelcomeQuizScreenView(props) {
    //ui for overview of the test like time available, author of test, etc
    // it also has a start button
    const {quiz, onClickStart} = props;
    const styles = {
        section: {
            padding:"20px 20px 20px 20px",
            height:"100vh", 
            width: "100vh",
            overflow:"hidden"
        },
        grid: {
            display:'grid',
            height: "100vh",
            width: "100%",
            gridTemplateColumns: '1fr 1fr',
        },
        img: {
            width:"100%",
            height: "100%",
        }
      };

    if (quiz) {
        const timeAllowed = quiz[0].getTimeAllowed();
        const title =  quiz[0].getTitle();
        const description = quiz[0].getDescription();
        const author = quiz[0].getAuthor();
        const hours =   parseInt(timeAllowed / 60)
        const minutes =  timeAllowed % 60
        
        return(
        <div style={styles.grid}>
            <div style={styles.section}>
                <h1>{title}</h1>
                <h2>Time Allowed: {hours} hour(s) and {minutes} minute(s)</h2>
                <h2>{description}</h2>
                <h2>By: {author}</h2>
                <Button onClick={onClickStart}>Start</Button>
            </div>
            <div >
                <img src={obj} style={styles.img}></img>
            </div>    
        </div>
        )
    } 
    else {
        return (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          );
    }
}
