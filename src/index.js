import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import timetracker from './reducers'

injectTapEventPlugin()

const initialState = {
  currentTask: {
    currentFilter: 'none',
    tasks: [
      {description: "uno", duration: 20*60, remaining: 120, completed: false},
      {description: "dos", duration: 31*60, remaining: 120, completed: false},
      {description: "tres", duration: 50*60, remaining: 120, completed: false},
      {description: "cuatro", duration: 70*60, remaining: 120, completed: false},
    ]
  }
}

const store = createStore(timetracker, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
