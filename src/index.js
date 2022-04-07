import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {rootReducer} from "./reducers/rootReducer";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>{' '}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
