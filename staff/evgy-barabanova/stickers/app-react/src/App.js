// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/Login';
import Main from "./components/Main";
import Register from "./components/Register";
import Profile from './components/Profile';

function App() {


  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/users/register' element={<Register />}></Route>
        <Route path='users/auth' element={<Auth />}></Route>
        <Route path='users/:id' element={<Profile />}></Route>
      </Routes>
    </div>

  );
}

export default App;
