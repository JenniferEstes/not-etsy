import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { provider } from 'react-redux'
import thunk from 'redux-thunk'
// gets rid of line of code starting with window.__
import { composeWithDevTools } from 'redux-devtools-extension'
import './App'
import categoryList from './components/categoryList'
import favoriteList from './components/favoriteList'
import productList from './components/productList'
import rootReducer from './reducers/rootReducer'
// import './index.css'
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);