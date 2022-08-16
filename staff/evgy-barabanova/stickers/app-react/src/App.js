// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home/*" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>

  );
}

export default App;
