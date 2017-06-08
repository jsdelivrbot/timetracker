import React, { Component } from 'react'
import { HistoricProgress, AddTask, ActiveTask, UserTaskList } from './containers'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ActiveTask />
        <AddTask />
        <UserTaskList />
        <HistoricProgress />
      </div>
    )
  }
}

export default App
