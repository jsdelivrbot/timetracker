import _ from 'lodash'

const initialState = {
  tasks: []
}

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
    ...state,
    currentFilter: duration
  }
}

const currentTask = (state = initialState, action) => {
  switch(action.type){
    case 'moveUp':
      if (action.currentIndex > 0) {
        return moveElementUp(state.tasks, action.currentIndex)
      }
      break;
    case 'moveDown':
      if (action.currentIndex < state.tasks.length-1) {
        return moveElementDown(state.tasks, action.currentIndex)
      }
      break;
    case 'editTask':
    case 'editTime':
    case 'remove':
      return remove(state.tasks, action.currentIndex)
    case 'complete':
      return complete(state.tasks, action.currentIndex)
    case 'filter':
      return setFilter(state, action.duration)
    default:
      break
  }
  return state
}

export default currentTask
