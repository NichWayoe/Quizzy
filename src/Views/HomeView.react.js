import {MyButton,PostCard} from "../Components/styledComponents"
import HomeCard from "../Components/HomeCard";
import QuizCategory from "../Model/QuizCategory.react";
import { Grid } from '@mui/material';

function HomeView(props) {
 const {categoryCards} = props
 const styles = {
    surface: {
        margin: '10px 20px 10px 20px',
        padding: '10px 10px',
        width: '100%',
        height: '100%',
        
    },
    grid: {
        display: "grid",
        columnGap: "10px",
        rowGap: "10px",
        gridTemplateColumns: '1fr 1fr',
    }
  };

return (
    <div style={styles.surface}>
    <div style={styles.grid}>
        {categoryCards}
    </div>
    </div>
    
    )
}
export default HomeView;