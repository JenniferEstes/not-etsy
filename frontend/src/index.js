import React from 'react'
// Gives access to updating and modifying virtual dom
import ReactDOM from 'react-dom'
// Component bridge between the Redux store and entire app
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// BR gives props and state on children going forward
import  { BrowserRouter } from 'react-router-dom'
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
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)