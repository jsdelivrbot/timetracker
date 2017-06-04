import _ from 'lodash'
import initialState from './initialState'

const addTask = (currentTasks, task) => {
  return {description: "", duration: ""}
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