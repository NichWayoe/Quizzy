import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
if (categoryCards) {
    return (
        <div style={styles.surface}>
            <div style={styles.grid}>
                {categoryCards}
            </div>
        </div>)
}
else {
    return(<Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>)
}

}
export default HomeView;