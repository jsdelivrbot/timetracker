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
  const completedTask = tasks[index]
  tasks.splice(index, 1)
  completedTask.completed = true
  completedTask.completedAt = new Date().getTime()
  tasks.push(completedTask)
  return {tasks}
}

const setFilter = (state, filter, value) => {
  const filters = _.clone(state.filters)
  filters[filter] = filters[filter] === value ? 'none' : value
  return { filters }
}

const addTask = (currentTasks, task) => {
  return {tasks: [task].concat(currentTasks)}
}

const taskList = (state = initialState, action) => {
  let delta

  switch(action.type){
    case 'addTask':
      delta = addTask(state.tasks, action.task)
      break
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
      const editTaskState = _.merge({}, state)
      editTaskState.tasks[action.currentIndex].description = action.value
      return editTaskState

    case 'editDuration':
      const editDurationState = _.merge({}, state)
      editDurationState.tasks[action.currentIndex].duration = action.value
      editDurationState.tasks[action.currentIndex].remaining = action.value
      return editDurationState

    case 'remove':
      delta = remove(state.tasks, action.currentIndex)
      const removeState = _.merge({}, state)
      removeState.tasks = delta.tasks
      return removeState

    case 'complete':
      delta = complete(state.tasks, action.currentIndex)
      const completeState = _.merge({}, state)
      completeState.tasks = delta.tasks
      return completeState

    case 'filter':
      delta = setFilter(state, action.filter, action.value)
      break;

    case 'toggleCounter':
      if (action.isRunning) {
        const newState = _.merge({}, state)
        newState.tasks[0].remaining = action.remaining
        return newState
      }
      break

    case 'resetCounter':
        const resetCounterState = _.merge({}, state)
        resetCounterState.tasks[0].remaining = resetCounterState.tasks[0].duration
        return resetCounterState

    case 'fetchTasks':
      const fetchTasksState = _.merge({}, state)
      fetchTasksState.tasks = action.tasks
      return fetchTasksState

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
