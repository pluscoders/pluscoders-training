import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import { users } from './data'
import { useState } from 'react'
import Home from './components/Home'

function App() {
  const [user, setUser] = useState()

  const handleCredentialsSubmitted = (email, password) => {
    //console.log(email, password)

    const user = users.find(user => user.email === email && user.password === password)

    if(!user) {
      alert('wrong credentials')

      return
    }

    setUser(user)
  }


  return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {!user && <Login onCredentialsSubmitted={handleCredentialsSubmitted}/>}
        {user && <Home name={user.name} />}
      </header>
    </div>
}

export default App;
