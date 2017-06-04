import _ from 'lodash'
import initialState from './initialState'

const moveElementUp = (currentTasks, index) => {
  let tasks = _.clone(currentTasks)
  let swap = [tasks[index], tasks[index-1]]
  tasks.splice(index-1, 2, ...swap)
  return {tasks}
}

const moveElementDown = (currentTasks, index) => {
  let tasks = _.clone(currentTasks)
  let swap = [tasks[index+1], tasks[index]]
  tasks.splice(index, 2, ...swap)
  return {tasks}
}

const remove = (currentTasks, index) => {
  let tasks = _.clone(currentTasks)
  tasks.splice(index, 1)
  return {tasks}
}

const complete = (currentTasks, index) => {
  let tasks = _.clone(currentTasks)
  tasks[index].completed = true
  return {tasks}
}

const setFilter = (state, duration) => {
  return {
    currentFilter: duration === state.currentFilter ? 'none' : duration
  }
}

const taskList = (state = initialState, action) => {
  let delta

  switch(action.type){
    case 'moveUp':
      if (action.currentIndex > 0) {
        delta = moveElementUp(state.tasks, action.currentIndex)
      }
      break;
    case 'moveDown':
      if (action.currentIndex < state.tasks.length-1) {
        delta = moveElementDown(state.tasks, action.currentIndex)
      }
      break;
    case 'editTask':
    case 'editTime':
      break;
    case 'remove':
      delta = remove(state.tasks, action.currentIndex)
      break;
    case 'complete':
      delta = complete(state.tasks, action.currentIndex)
      break;
    case 'filter':
      delta = setFilter(state, action.duration)
      break;
    default:
      break
  }

  if (!_.isNil(delta)) {
    const newState = _.merge({}, state, delta)
    return newState
  }

  return state
}

export default taskList
