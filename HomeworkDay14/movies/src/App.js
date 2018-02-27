import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      year: '',
      director: '',
      plot: '',
    };

  }



  handleInput(e) {
    this.setState({ title: e.target.value });
  }
  handleSearch(e) {
    if (this.state.title != '')
      alert("please enter a title");
      //if title is '' have an alert appear
    e.preventDefault();
    let url = 'http://www.omdbapi.com/?apikey=afa6c441&t=' + this.state.title
    console.log(url)
    const promise = axios.get(url);
    promise.then(data => {
      // console.log(data.data.Year)
      // console.log(data)
      this.setState({ year: data.data.Year, director: data.data.Director, plot: data.data.Plot});
    })
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <div><h1>Movie Data</h1></div>
        <form onSubmit={this.handleSearch.bind(this)}>
          <div className="movieSearch">
            <input onChange={this.handleInput.bind(this)} type="text" placeholder="Find a movie" value={this.state.title} />
            <button>Search</button>
          </div>
        </form>
        <p><b>Year:</b> {this.state.year}</p>
        <p><b>Director:</b> {this.state.director} </p> 
        <p><b>Plot:</b> {this.state.plot} </p>
      </div>
    )
  }
}

export default App;

