import { combineReducers } from 'redux'
import currentTask from './currentTask'

const timetracker = combineReducers({
  currentTask
})

export default timetracker
