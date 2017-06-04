import React, { Component } from 'react'
import { CurrentTask, NewTask, TaskList, History } from './timetracker'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <CurrentTask />
        <NewTask />
        <TaskList />
        <History />
      </div>
    )
  }
}

export default App
