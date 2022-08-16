// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Page from './pages/Page';
import Home from './pages/Home';

function App() {


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Page><Register /></Page>}></Route>
        <Route path="/login" element={<Page><Login /></Page>}></Route>
        <Route path="/users/profile" element={<Page><Profile/></Page>}></Route>
      </Routes>
    </div>

  );
}

export default App;
