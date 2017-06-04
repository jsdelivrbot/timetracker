import _ from 'lodash'
import initialState from './initialState'

const addTask = (currentTasks, description, duration) => {
  return {tasks: [{
    description,
    duration,
    remaining: duration,
    completed: false
  }].concat(currentTasks)}
}

const newTask = (state = initialState, action) => {
  let delta

  console.log("State:", state, ", Action:", action)
  switch(action.type){
    case 'addTask':
      delta = addTask(state.tasks, action.description, action.duration)
      break
    case 'editNewTask':
      delta = {description: action.value}
      break
    case 'editNewDuration':
      delta = {duration: action.value}
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
