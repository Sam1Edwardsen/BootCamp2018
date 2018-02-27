import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import SearchBar from './SearchBar';
import {
  
  Route,
  BrowserRouter
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <h1 style={{ textAlign: 'left' }}>Anonymous Notes</h1>
          </header>
          <Route exact path="/" component={SearchBar} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
