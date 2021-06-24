import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { provider } from 'react-redux'
import thunk from 'reux-thunk'
// gets rid of line of code starting with window.__
import { composeWithDevTools } from 'redux-devtools-extension'
import './App'
import productList from './components/productList'
import favoriteList from './components/favoriteList'
import productList from './components/productList'


// import './index.css'
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Combined reducers into rootreducer bc can't pass multiple models into createStore