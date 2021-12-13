import {CardHeader, Typography, Box} from '@mui/material';
import icon from '../Icons/icon.png'
import {LoginCard} from '../Components/styledComponents'

export default function QuizResultsView(props) {
    const {score, numberOfQuestions} = props
    return(<div>
    <Box sx={{padding:8, px:75, flexGrow:2, overflow:"hidden",paddingRight: 20, paddingLeft: 50, borderRadius:50}}>
    <LoginCard>  
    <CardHeader avatar={<img style={{paddingLeft:"25%"}} src={icon}/>}title = {<Typography variant="h3" sx={{color:"white", alignText:"center", paddingLeft:20, fontWeight: 900}}>
            Your Score!
          </Typography>} />
          
    <Typography variant="h1" sx={{color:"white", alignText:"center", paddingLeft:32, fontWeight: 600, fontSize:400} }>
            {score}
    </Typography>
    
    </LoginCard> </Box>
    </div>)
}