import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './reducer.js';
import {'https://5a83402398bd81001246c901.mockapi.io/'} from './actions';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument('https://5a83402398bd81001246c901.mockapi.io/'), logger)
  )
)