import React from 'react'
import ReactDOM from 'react-dom'

import ProfilePageFunction from './components/ProfilePageFunction'
import ProfilePageClass from './components/ProfilePageClass'

class App extends React.Component {
    state = {
      user: 'Joker',
    };
    render() {
      return (
        <>
          <label>
            <p>Elige tu malvado de <b>Batman</b> favorito: </p>
            <select
              value={this.state.user}
              onChange={e => this.setState({ user: e.target.value })}
            >
              <option value="Joker">Joker</option>
              <option value="Pingüino">Pingüino</option>
              <option value="Black Mask">Black Mask</option>
              <option value="Acertijo">Acertijo</option>
              <option value="Espantapájaros">Espantapájaros</option>
              <option value="Two-Face">Two-Face</option>
              <option value="Mr. Freeze">Mr. Freeze</option>
              <option value="Harley Quinn">Harley Quinn</option>
              <option value="Cat Woman">Cat Woman</option>
            </select>
          </label>

          <h1>Malvado seleccionado: {this.state.user}</h1>

          <div>
            <ProfilePageFunction user={this.state.user} />
            <b> (function)</b>
          </div>
          <br/>
          <div>
            <ProfilePageClass user={this.state.user} />
            <b> (class)</b>
          </div>
        </>
      )
    }
  }
  
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);