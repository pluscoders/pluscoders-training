import './App.css';
import Logo from './components/Logo'
import Add from './components/Add'
import Mul from './components/Mul'
import Sub from './components/Sub'
import Div from './components/Div'

function App() {
  return <div className='app'> 
    <Logo />
    <p>Hola mundo</p>
    <Add />
    <Mul />
    <Sub />
    <Div />
  </div>
}

export default App
