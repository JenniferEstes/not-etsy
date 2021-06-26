import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// gets rid of line of code starting with window.__
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import rootReducer from './reducers/rootReducer'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)