import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      username: "",
      avatar: "",
      email: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  addUser(e) {
    e.preventDefault();
    const userObj = {
      username: this.state.user,
      email: this.state.email,
      avatar: this.state.avatar,
    }

    axios.post('http://5a747e5461c2a40012894aa6.mockapi.io/api/v1/', userObj)
      .then((response) => {
    this.getUsers();
      })
  }

  componentDidMount() {
    this.getusers()
  }

  getusers() {
    axios.get('http://5a747e5461c2a40012894aa6.mockapi.io/api/v1/users')
    .then(({data: users}) => {
  this.setState({users});
  });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <form>
          <label htmlFor="">
            Email:
          <input name="email" value={this.state.email} onChange={this.handleChange} type="text" />
          </label>
          <label htmlFor="">
            Username:
          <input name="username" value={this.state.username} onChange={this.handleChange} type="text" />
          </label>
          <label htmlFor="">
            Avatar:
          <input name="avatar" value={this.state.avatar} onChange={this.handleChange} type="text" />
          </label>
          <button >

          </button>
        
        </form>

        {this.state.users.map((user) => (
          <p key={user.id}>{user.username}</p>
        ))}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
