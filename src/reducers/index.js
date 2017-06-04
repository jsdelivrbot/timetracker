import { combineReducers } from 'redux'
import taskList from './taskList'
import newTask from './newTask'

const timetracker = combineReducers({
  taskList,
  newTask
})

export default timetracker
