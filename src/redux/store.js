import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (()=> {
    return createStore(rootReducer, composeEnhancers(
      applyMiddleware(thunk, logger)
  ));
})()
