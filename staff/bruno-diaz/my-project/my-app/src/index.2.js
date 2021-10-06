import React from 'react'
import ReactDOM from 'react-dom'

const cities = ['Barcelona', 'Santander', 'Burgos', 'Leon', 'Madrid']

class App extends React.Component {
    state = {
      user: 'Joker',
    };
    render() {
      return (
        <>
          <ul>
              { cities.map((city) => (
                <li>{ city }</li>
              ))}
          </ul>
        </>
      )
    }
  }
  
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);