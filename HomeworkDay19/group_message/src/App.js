import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './ui-toolkit/css/nm-cx/main.css'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      email: '',
      usersList: [],
      selectedUser: undefined,
    }

    this.getUsers = this.getUsers.bind(this);
    this.mapUserList = this.mapUserList.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.showUserInfo = this.showUserInfo.bind(this);
    this.convertAndFormatDate = this.convertAndFormatDate.bind(this);
    this.returnToUserList = this.returnToUserList.bind(this);
  }

  newUser() {
    return {
      userName: '',
      email: '',
      createdDate: ''
    }
  }

  getUsers() {
    axios.get('http://5a747e5461c2a40012894aa6.mockapi.io/api/v1/users')
      .then((response) => {
        console.log(response.data); //log returned data
        this.setState({
          selectedUser: undefined,
          usersList: response.data
        }); //store useres to state
      })
  }

  deleteUser(userID) {
    axios.delete('http://5a747e5461c2a40012894aa6.mockapi.io/api/v1/users/' + userID)
      .then((response) => {
        console.log(response);
        console.log(response.data); //log returned data
      })
  }

  showUserInfo(arrayIndex) {
    console.log("In showUserInfo");
    this.setState({ selectedUser: arrayIndex });
    // console.log(this.state.usersList[arrayIndex]);
  }

  returnToUserList() {
    console.log("In returnToUserList");
    this.setState({ selectedUser: undefined });
  }

  componentDidMount() {
    this.getUsers()
  }

  convertAndFormatDate(secondsInHere) {
    console.log("in convertAndFormatDate")
    console.log(secondsInHere)
    secondsInHere = (secondsInHere * 1000)
    var dt = new Date(secondsInHere);
    return dt.toLocaleDateString("en-US");

  }

  mapUserList = (userObject, arrayIndex) => {
    return (
      <div id={"UserRow" + arrayIndex} key={"UserRow" + arrayIndex} className="row">
        <div key={"userName" + arrayIndex} className="small-3 columns" >{userObject.username}</div>
        <div key={"email" + arrayIndex} className="small-3 columns" >{userObject.email}</div>
        <div key={"createdAt" + arrayIndex} className="small-3 columns" >{this.convertAndFormatDate(userObject.createdAt)}</div>
        <div key={"options" + arrayIndex} className="small-3 columns" >
          <span style={{ padding: "3px", color: "green" }} onClick={() => this.showUserInfo(arrayIndex)}>Info</span>
          <span style={{ padding: "3px" }}>Edit</span>
          <span style={{ padding: "3px", color: "red" }} onClick={() => this.deleteUser(userObject.id)}>Delete</span>
        </div>
      </div>
    )
  }

  render() {
    let renderThisStuff = <div key="defaultRender">&nbsp;</div>;

    if (this.state.selectedUser === undefined) {
      renderThisStuff =
        <div>
          <div id="columnHeaderRow" key="columnHeaderRow" className="row">
            <div key="columnHeaderUserName" className="small-3 columns"><b>User Name</b></div>
            <div key="columnHeaderEmail" className="small-3 columns"><b>Email</b></div>
            <div key="columnHeaderCreatedDate" className="small-3 columns"><b>Created</b></div>
            <div key="columnHeaderOptions" className="small-3 columns"><b>Actions</b></div>
          </div>
          {this.state.usersList.map(this.mapUserList)}
          <div id="bottomSpacerRow" key="bottomSpacerRow" className="row">
            <div key="bottomSpacerContainer" className="small-12 columns">
              &nbsp;
          </div>
          </div>
          <div id="addUserRow" key="addUserRow" className="row">
            <div key="addUserContainer" className="small-3 columns">
              Add a New User
            </div>
            <div key="adduserContainerSpacer" className="small-9 columns">
              &nbsp;
        </div>
          </div>
        </div>
    }
    else {
      renderThisStuff =
        <div>
          <div key="userIDRow" className="row">
            <div key="UserIDColumn" className="small-12 columns">
              <h1>User ID: {this.state.usersList[this.state.selectedUser].id}</h1>
            </div>
          </div>
          <div key="userNameRow" className="row">
            <div key="userNameColumn" className="small-12 columns">
              <p>Name: {this.state.usersList[this.state.selectedUser].username}</p>
            </div>
          </div>
          <div key="userEmailRow" className="row">
            <div key="userEmailColumn" className="small-12 columns">
              <p>Email: {this.state.usersList[this.state.selectedUser].email}</p>
            </div>
          </div>
          <div key="userDateRow" className="row">
            <div key="userDateColumn" className="small-12 columns">
              <p>Created: {this.convertAndFormatDate(this.state.usersList[this.state.selectedUser].createdAt)}</p>
            </div>
          </div>
          <div key="userSpacerRow" className="row">
            <div key="userSpacerRow" className="small-12 columns">
              &nbsp;
            </div>
          </div>
          <div key="userDataNavigationRow" className="row">
            <div key="userDataNavigationColumn" className="small-12 columns">
              <span style={{ padding: "3px", color: "blue" }} onClick={() => this.returnToUserList()}>Back</span>
              <span style={{ padding: "3px" }}>Edit</span>
              <span style={{ padding: "3px", color: "red" }} onClick={() => this.deleteUser(this.state.usersList[this.state.selectedUser].id)}>Delete</span>
            </div>
          </div>
        </div>
    }



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {renderThisStuff}
      </div>

    );
  }
}

export default App;