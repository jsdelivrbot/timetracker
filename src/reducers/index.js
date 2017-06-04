import { combineReducers } from 'redux'
import taskList from './taskList'
import newTask from './newTask'
import activeTask from './activeTask'

const timetracker = combineReducers({
  taskList,
  newTask,
  activeTask
})

export default timetracker
