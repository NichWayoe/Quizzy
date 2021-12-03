import './App.css';
import UserProvider from './Providers/UserProvider.react';
import QuizzyAppController from './Controllers/QuizzyAppController.react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginController from './Controllers/LoginController.react';
import NavBar from './Navigation/NavBar.react'
import HomeViewController from './Controllers/HomeViewController.react';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<QuizzyAppController/>}/>
      <Route path="/signin" exact element={<LoginController/>}/>
      <Route path="/home" exact element={<HomeViewController/>}/>
      </Routes>
      </BrowserRouter>
      </UserProvider> 
  );
}

export default App;
