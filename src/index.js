import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import mainReducer from './reducers/mainReducer';
import reduxPromise from 'redux-promise'

const theStore = applyMiddleware(reduxPromise)(createStore)(mainReducer)

ReactDOM.render(
  <Provider store={theStore}>
       <App />
  </Provider> , 
document.getElementById('root'));

