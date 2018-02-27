import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Board needs to be abstracted into stateful component
// Footer also needs to be abstracted into the same stateful component

const squareObj = {
  systemSelected: false,
  userClicked: false
}

const ONE = '1'
const TWO = '2'
const THREE = '3'
const FOUR = '4'
const FIVE = '5'

const generateSquares = () => {
  const arr = [];
  for(let i = 0; i < 12; i++) {
    arr.push(squareObj);
  }
  return arr;
}

const getColor = (square, currentBoardState) => {
    if (currentBoardState == THREE && square.systemSelected)
        return 'blue';
    else if (currentBoardState == check);
    if (square.systemSelected === squareObj.systemSelected)
        return 'green';
    else if (square.systemSelected != square.userSelected)
        return 'yellow';
    else if (square.systemSelected !== square.userSelected)
        return 'red';
    else return 'gray';
  //if currentBoardstate is memorized AND square.systemSelected 
    // return 'blue';
  //else if currentBoardstate is checkstate
    //if square.systemSelected AND square.userSelected
      //return 'green'
    //else if square.systemSelected AND NOT square.userSelected
      //return 'yellow'
    //else if NOT square.systemSelected AND square.userSelected
      //return 'red'
    //else
      //return 'gray'
  // else
    //return 'gray'
}

class BoardState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBoardState: ONE,
      squares: generateSquares(),
    }
  }

   createSquare () {
       return <button></button>
   }

  updateBoardState() {
    let newState = ''
    switch(this.state.currentBoardState) {
      case ONE:
        newState = TWO;
        break;
      case TWO:
        newState = THREE;
        break;
      case THREE:
        newState = FOUR;
        break;
      case FOUR:
        newState = FIVE;
        break;
      case FIVE:
        newState = TWO;
        break;
      default:
        throw new Error('Something bad happened')
    }
    this.setState({currentBoardState: newState});
  }

  updateSquare() {
    
  }

  userClicked() {

  }

  randomizeArray() {
     // This function will randomize the squares array in state
  }

  gameStart() {
    // Initializes the state
    // Starts the 3 second countdown
  }

  render() {
    return (
    
    
        
      <div className="Board-State">
        <div className="board">
          <div className="row">
            {this.createSquare(0)}
            {this.createSquare(1)}
            {this.createSquare(2)}
            {this.createSquare(3)}
          </div>
          <div className="row">
          {this.createSquare(4)}
          {this.createSquare(5)}
          {this.createSquare(6)}
          {this.createSquare(7)}
          </div>
          <div className="row">
          {this.createSquare(8)}
          {this.createSquare(9)}
          {this.createSquare(10)}
          {this.createSquare(11)}
          </div>
        </div>
        <div className="footer">
          <button>Start Game</button>
        </div>
      </div>
    )
  }
}

const App = props => (
  <div className="App">
    <h1 className="header">Memory Game</h1>
    <BoardState />
  </div>
)

export default App;