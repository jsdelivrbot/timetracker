import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import timetracker from './reducers'
import initialState from './reducers/initialState'
import thunk from 'redux-thunk';
import { get } from './utils'
import { fetchTasks } from './actions'

injectTapEventPlugin()

const store = createStore(timetracker, initialState, applyMiddleware(thunk))

store.dispatch(dispatch => {
  get(tasks => {
    dispatch(fetchTasks(tasks))
  })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))

registerServiceWorker()
