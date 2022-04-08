import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main';
import UserLogin from './components/UserLogin/UserLogin';
import UserSignup from './components/UserSignup/UserSignup';


function App() {
  return (
    <>
    <div className='container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signip' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
