import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </div>

  );
}

export default App;
