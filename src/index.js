import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
//載入react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
<<<<<<< HEAD
import { rootReducer } from './pages/Product/reducers/index'
=======
import { rootReducer } from './reducers/index'
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
