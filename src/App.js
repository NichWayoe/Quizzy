import './App.css';
import UserProvider from './Providers/UserProvider.react';
import QuizzyAppController from './Controllers/QuizzyAppController.react';

function App() {
  return (
    <div>
      <UserProvider>
      <QuizzyAppController></QuizzyAppController>
      </UserProvider>
    </div>
  );
}

export default App;
