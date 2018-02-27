import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 style={{ textAlign: 'left' }}>Github Battle </h1>
          {/* <div><h3>Battle</h3> | <h3>Rankings</h3></div> */}
        </header>
        <p>
          <div class="card" style={{ width: '700px', display: 'inline-block', float: 'left' }}>
            <h5>Player 1</h5>
            <div class="md-text-field">
              <input type="text" placeholder="Lookup Player 1" />
            </div>
            <div><button class="button btn-cta">Get User</button></div>
          </div>
          <div class="card" style={{ width: '700px', display: 'inline-block', float: 'right' }}>
            <h5>Player 2</h5>
            <div class="md-text-field">
              <input type="text" placeholder="Lookup Player 2" />
            </div>
            <div><button class="button btn-cta">Get User</button></div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
