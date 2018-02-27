import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Board needs to be abstracted into stateful component
// Footer also needs to be abstracted into the same stateful component

const newSqrObj = () => {
  return {
    systemSelected: false,
    userClicked: false
  }
}

const ONE = '1'
const TWO = '2'
const THREE = '3'
const FOUR = '4'
const FIVE = '5'

const generateSquares = () => {
  const arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push(newSqrObj());
  }
  return arr;
}

const getColor = (square, currentBoardState) => {
  if (currentBoardState == THREE && square.systemSelected)
    return 'blue';
  else if (currentBoardState == FIVE) {
    if (square.systemSelected && square.userClicked)
      return 'green';
    else if (square.systemSelected && !square.userClicked)
      return 'yellow';
    else if (!square.systemSelected && square.userClicked)
      return 'red';
  }
  else return 'gray';
}
const buttonStyle = {
  backgroundColor: 'orange',
  width: '200px',
  height: '200px',
};

class BoardState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBoardState: ONE,
      squares: generateSquares(),
    }



    this.gameStart = this.gameStart.bind(this);
    this.randomizeArray = this.randomizeArray.bind(this);
    this.userClicked = this.userClicked.bind(this);
    this.moveToMemorizePhase = this.moveToMemorizePhase.bind(this);
    this.moveToGuessPhase = this.moveToGuessPhase.bind(this);
    this.moveToCheckPhase = this.moveToCheckPhase.bind(this);
    this.gameReplay = this.gameReplay.bind(this);

  }

  createSquare(Num) {
    const statusBoard = this.state.squares
    let x = statusBoard[Num]
    return <button onClick={() => this.userClicked(Num)} style={{ ...buttonStyle, background: getColor(x, this.state.currentBoardState) }}></button>
  }

  updateBoardState() {
    let newState = ''
    switch (this.state.currentBoardState) {
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
    this.setState({ currentBoardState: newState });
  }

  userClicked(index) {
    let square = this.state.squares[index];
    console.log(this.state.squares)
    square.userClicked = true;
    const squares = this.state.squares.slice()
    squares[index] = square;
    this.setState({ squares: squares })
    console.log(index)

    // will receive an index which is the location of the squares array in this.state
    // grab the value of the index of the squares array in this.state
    //
  }

  randomizeArray() {
    const randomNumbers = (() => {
      let array = [];
      for (let x = 0; x < 4; x++) {
        let randomNumber = '';
        while (array.includes(randomNumber = Math.floor(Math.random() * 11))) { }
        array.push(randomNumber);
      }
      return array;
    })();

    const newSquares = this.state.squares;
    randomNumbers.forEach(number => {
      newSquares[number].systemSelected = true;
    });
    console.log(newSquares);
    return newSquares;

    // This function will randomize the squares array in state
  }

  moveToMemorizePhase() {
    this.updateBoardState();
    setTimeout(this.moveToGuessPhase, 2);
  }

  moveToGuessPhase() {
    this.updateBoardState();
    setTimeout(this.moveToCheckPhase, 3000)
  }

  moveToCheckPhase() {
    this.updateBoardState();

  }
  gameStart() {
    this.updateBoardState();
    this.setState({ squares: this.randomizeArray() });
    setTimeout(this.moveToMemorizePhase, 3000);
  }

  gameReplay() {
    this.setState({ squares: generateSquares(), currentBoardState: ONE }, this.gameStart);
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

          {this.state.currentBoardState === ONE &&
            <button onClick={this.gameStart}>Start New game</button>
          }

          {this.state.currentBoardState === TWO &&
            <h3>Get Ready to Memorize Squares TIMER</h3>
          }

          {this.state.currentBoardState === FOUR &&
            <h3>Guess the correct cells!</h3>
          }

          {this.state.currentBoardState === FIVE &&
            <button onClick={this.gameReplay}>Replay</button>
          }

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