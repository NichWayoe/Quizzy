import './App.css';
import UserProvider from './Providers/UserProvider.react';
import QuizzyAppController from './Controllers/QuizzyAppController.react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginController from './Controllers/LoginController.react';
import NavBar from './Navigation/NavBar.react'
import HomeViewController from './Controllers/HomeViewController.react';
import ProfileViewController from './Controllers/ProfileViewController.react'; 
import CategoryDetailViewController from './Controllers/CategoryDetailViewController.react'
import WelcomeQuizScreenViewController from './Controllers/WelcomeQuizScreenViewController.react'
import CreateQuizViewController from './Controllers/CreateQuizViewController.react';

function App() {
  return (
    <div style={{width:'100vw%', overflow:"hidden", height:'100%vh'}}>
    <UserProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<QuizzyAppController/>}/>
      <Route path="/signin" exact element={<LoginController/>}/>
      <Route path="/home" exact element={<HomeViewController/>}/>
      <Route path="/home/:categoryTitle" exact element={<CategoryDetailViewController/>}/>
      <Route path="/myprofile" exact element={<ProfileViewController/>}/>
      <Route path="/createquiz" exact element={<CreateQuizViewController/>}/>
      <Route path="/quiz/:quizID" exact element={<WelcomeQuizScreenViewController/>}/>

      
      </Routes>
      </BrowserRouter>
      </UserProvider> 
      </div>
  );
}

export default App;
