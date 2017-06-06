import { combineReducers } from 'redux'
import taskList from './taskList'
import newTask from './newTask'
import activeTask from './activeTask'
import historicProgress from './historicProgress'

const timetracker = combineReducers({
  taskList,
  newTask,
  activeTask,
  historicProgress,
})

export default timetracker
