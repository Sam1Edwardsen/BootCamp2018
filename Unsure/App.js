import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './ui-toolkit/css/nm-cx/icons.css';
import './ui-toolkit/css/nm-cx/fonts.css';
import './ui-toolkit/css/nm-cx/styleguide.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>todos MVC</h1>
        </header>
        <TodoApp />
        <footer>
          <p>Double-click to edit a todo</p>
          <p>Created by Team BEAST</p>
          <p>Part of NM React Boot Camp</p>
        </footer>
      </div>
    );
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {

      toDoList: [],
      currentFilter: 'All',
      newTask: ''
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
    this.handleFilterBtn = this.handleFilterBtn.bind(this);
    this.handleExistingItemUpdate = this.handleExistingItemUpdate.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleItemComplete = this.handleItemComplete.bind(this);
    this.handleClearComplete = this.handleClearComplete.bind(this);

  }

  handleAddItem(e) {
    e.preventDefault();
    console.log(e.target);
    let newTaskList = this.state.toDoList.slice();
    newTaskList.push({ id: this.state.toDoList.length, status: 'Active', toDoItemDescription: this.state.newTask });
    this.setState({ toDoList: newTaskList, newTask: '' });
  }

  handleFilterBtn(event) {
    console.log(event.target.id);

    switch (event.target.id) {
      case 'btnAll':
        this.setState({ currentFilter: 'All' });
        break;

      case 'btnActive':
        this.setState({ currentFilter: 'Active' });
        break;

      case 'btnCompleted':
        this.setState({ currentFilter: 'Completed' });
        break;
    }

  }


  handleTaskUpdate(e) {
    this.setState({ newTask: e.target.value });
  }

  handleExistingItemUpdate(e) {
    console.log(e.target)
    let arr = this.state.toDoList.slice();
    arr[e.target.id].toDoItemDescription = e.target.value;
    this.setState({toDoList: arr});
}
  handleItemDelete(e) {
    console.log(e.target.id);
    let arr = this.state.toDoList.slice();
    arr[e.target.id].status = 'Deleted';
    this.setState({toDoList: arr});
  }

  handleItemComplete(e) {
    console.log(e.target.id);
    let arr = this.state.toDoList.slice();
    arr[e.target.id].status = e.target.checked === true ? 'Completed' : 'Active'
    this.setState({toDoList: arr});
  }
  handleClearComplete(e){
    let arr = this.state.toDoList.slice();
    arr.map((item) => {item.status === 'Completed' ? item.status = 'Deleted': null })
    this.setState({toDoList: arr});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddItem}>
          <div className="md-text-field">
            <input onChange={this.handleTaskUpdate} type="text" placeholder="What needs to be done" value={this.state.newTask} />
          </div>
        </form>
        <ToDoList toDoList={this.state.toDoList} currentFilter={this.state.currentFilter} handleExistingItemUpdate={this.handleExistingItemUpdate} handleItemDelete={this.handleItemDelete} handleItemComplete={this.handleItemComplete}  />
        {this.state.toDoList.length > 0 ? <ListFooter currentFilter={this.state.currentFilter} toDoList={this.state.toDoList} handleFilterBtn={this.handleFilterBtn} handleClearComplete={this.handleClearComplete} /> : null
        }
      </div>
    )
  }
}


function ToDoList(props) {
  let arr = props.toDoList.filter(function (item) {
    return (item.status === props.currentFilter || props.currentFilter === 'All') && item.status != 'Deleted';
  }
  );

  return (
    <div>
      {arr.map((item, idx) =>
        <div className="row" key={idx}>
          <div className="small-2 columns">

          <input id={item.id} type="checkbox" checked={item.status === 'Completed' ?  true : false } onChange={props.handleItemComplete} />
          
          </div>
          <div className="small-8 columns"><input id={item.id} className="existingItem" value={item.toDoItemDescription} onChange={props.handleExistingItemUpdate} /></div>
          <div className="small-2 columns"><button id={item.id} onClick={props.handleItemDelete} className="button btn-cta alert small">X</button></div>
        </div>
      )}
    </div>
  );
}

function ListFooter(props) {
  console.log(props);
  let itemsLeft = props.toDoList.filter(function (item) {
    return item.status === 'Active';
  })

  return (
    <div className="row">
      <div className="small-2 columns">{itemsLeft.length} items left</div>
      <div className="small-8 columns">
        <ul className="button-group btn-cta secondary small">
          <li className={props.currentFilter === "All" ? "active" : ""}><button id="btnAll" onClick={props.handleFilterBtn}>All</button></li>
          <li className={props.currentFilter === "Active" ? "active" : ""} ><button id="btnActive" onClick={props.handleFilterBtn}>Active</button></li>
          <li className={props.currentFilter === "Completed" ? "active" : ""}><button id="btnCompleted" onClick={props.handleFilterBtn}>Completed</button></li>
        </ul>
      </div>
      <div className="small-2 columns"><button onClick={props.handleClearComplete}>Clear completed</button></div>
    </div>
  );
}


export default App;
