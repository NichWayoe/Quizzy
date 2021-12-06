import {MyButton,PostCard} from "../Components/styledComponents"
import HomeCard from "../Components/HomeCard";
import QuizCategory from "../Model/QuizCategory.react";
function HomeView(props) {
    const {categoryCards} = props
return (
    <>
    <div>Explore</div>
    {categoryCards}
    </>
    
    )
}
export default HomeView;