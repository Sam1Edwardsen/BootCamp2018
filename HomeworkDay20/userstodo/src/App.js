import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import CSS from './App.css';

const ReactRouterExample = () => (
  <BrowserRouter>
    <div>
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/todos">Todos</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/todos" component={Todos} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Users and Todos</h2>
  </div>
)

const Users = ({ match }) => (
  <div>
    <div>
      <h2>Users</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>
            User 1
       </Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>
            User 2
       </Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>
            User 3
       </Link>
        </li>
        <li>
          <Link to={`${match.url}/4`}>
            User 4
       </Link>
        </li>
      </ul>
    </div>
    <div>
      <Route path="/users/:id" component={UserItem} />
    </div>
  </div>
)

const UserItem = ({ match }) => (
  <div>
    <hr />
    <h3>{`User: ${match.params.id}`}</h3>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
  </div>
)

const Todos = ({ match }) => (
  <div>
    <h2>Todos</h2>
    <ul>
      <li>
        <Link to={`${match.url}/1`}>
          Todo 1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/2`}>
          Todo 2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/3`}>
          Todo 3
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/4`}>
          Todo 4
        </Link>
      </li>
    </ul>
    <div>
      <Route path="/todos/:id" component={TodoItem} />
    </div>
  </div>
)

const TodoItem = ({ match }) => (
  <div>
    <hr />
    <h3>{`Todo Item: ${match.params.id}`}</h3>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
  </div>
)
export default ReactRouterExample