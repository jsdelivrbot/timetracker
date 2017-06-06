import React, { Component } from 'react'
import { HistoricProgress, AddTask, ActiveTask, UserTaskList } from './containers'
import { get } from './utils'
import './App.css'

class App extends Component {
  componentDidMount(){
    console.log("[*] componentDidMount")
    get('/tasks', response => {
      console.log("[*] response:", response)
    })
  }

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
