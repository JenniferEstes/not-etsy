import React from 'react'
import ReactDOM from 'react-dom'
import { createSore, applyMiddleware, compose } from 'redux'
import { provider } from 'react-redux'
import thunk from 'reux-thunk'
// gets rid of line of code starting with window.__

import { composeWithDevTools } from 'redux-devtools-extension'
// import './index.css'
// import App from './App'
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);