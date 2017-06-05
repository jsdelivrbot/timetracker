import _ from 'lodash'
import initialState from './initialState'
import { getFixedDuration } from '../utils'

const addTask = (currentTasks, task) => {
  return {description: "", duration: "", predefinedDuration: 'short'}
}

const newTask = (state = initialState, action) => {
  let delta

  switch(action.type){
    case 'addTask':
      delta = addTask(state.tasks, action.task)
      break
    case 'editNewTask':
      delta = {description: action.value}
      break
    case 'editNewDuration':
      if (action.durationType === 'duration') {
        delta = {duration: action.value, predefinedDuration: 'other'}
      } else {
        const duration = getFixedDuration(action.value, "")
        delta = {duration, predefinedDuration: action.value}
      }
      break
    default:
      break
  }

  if (!_.isNil(delta)) {
    const newState = _.merge({}, state, delta)
    return newState
  }

  return state
}

export default newTask
