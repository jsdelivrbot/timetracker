import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { CurrentTask } from './timetracker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { currentTask } from './timetracker'
import './App.css'

const store = createStore(currentTask)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <CurrentTask />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
