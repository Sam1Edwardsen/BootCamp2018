import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

const genId = (str1, str2, str3) => {
  const megaStr = '' + str1 + str2 + str3;
  const chars = [];
  for(let i = 0; i < megaStr.length; i++) {
    const randomVal = Math.floor(Math.random() * 3 * megaStr.charCodeAt(i));
    if (randomVal % 3 === 0) {
      chars.push(i);
    } else {
      chars.push(String.fromCharCode(randomVal));
    } if(i === str1.length || i === str2.length) chars.push('-')
  }
  return chars.join('');
}

class User {
  constructor(
    name,
    city,
    industry,
    hobbies,
    email
  ) {
    this.name = name;
    this.city = city;
    this.industry = industry;
    this.hobbies = hobbies;
    this.email = email;
    this.id = genId(email, industry, city);
  }
}

const initialState = {
  userPage: undefined,
  users: [
    new User('Bobby', 'Los Angeles', 'Software Development', 'Many many awesome fun hobbies', 'email@email.com'),
    new User('Henry', 'Seattle', 'Software Production', 'TV shows', 'root@email.com'),
    new User('Sofie', 'Boulder', 'Software Engineer', 'Gardening', 'souped up@email.com'),
    new User('Miranda', 'Detroit', 'Mechanic', 'Video Games', 'trippers@email.com'),
    new User('Jerome', 'NYC', 'Physicist', 'Reading', 'email@mailamail.com'),
    new User('Millie', 'Hawkins, Indiana', 'ESP', 'Blowing up things from the upside down', 'hoppin@email.com'),
    new User('Train', 'Oaklahoma City', 'Real Engineer', 'choo choo', 'chooc.choo@email.com'),
  ],
  input: ''
}

function getUser(users, id) {
  let foundUser
  users.forEach((user) => {
    if(user.id.indexOf(id) != -1) foundUser = user
  })
  return foundUser
}

function reducer(state=initialState, action) {
  switch(action.type){
    case 'selected-user':
    return{... state, userPage: getUser(state.userPage, action.payload) };
    case 'go-back':
      return {... state, userPage: undefined}
  }
}

const UserView = (props) => {
  props.userPage ?
  <div>
    This specific user was rendered

    <button onClick={props.goBack}>Go Back</button>
    </div> :
    <div>
      <input type='text' />
    <div>
      {props.user.map((user) => {
        <p onClick={() => props.selectedUser(user.id)} key={user.id}>{user.name}</p>
      })}
    </div>
    </div>
}


const mapStatesToProps = (state) => {
  return {
    userPage: state.userPage,
    users: state.users
}
}   

const mapDispatchProps = (dispath) => {
  return {
    selectUser(id) {
      dispatch({type: 'selected-user', payload: id})
    },
    goback(){
      dispatch({type: 'go-back'});
    }
  }
}
                                
const WrappedUserView = connect(mapStateToProps,mapDispatchToProps)(UserView);


export  {WrappedUserView}




// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = initialState
  
//   this.handleuser = this.handleuser.bind(this);
//   this.handleuserlist = this.handleuserlist.bind(this);
// }
//   handleuser(event) {
//     this.setState({ input: event.target.value });
//   }
//   handleuserlist(event) {
//     this.setState({users : event.target.value });
//   }
//   render() {
  
//     return (
//       <div className="App">
//       <input onChange={this.handleuser}  value={this.state.input}/>
//       <div>{this.state.users.map(users => <div>{users.name}</div>)}</div>

      
//       </div>

//     );
//   }
// }

// export default App;

