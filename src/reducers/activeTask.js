import _ from 'lodash'
import initialState from '../reducers/initialState'

const toggleCounter = (isRunning, remaining) => {
  if (isRunning) {
    return disableCounter();
  }
  return {counterStarted: new Date().getTime(), running: true}
}

const disableCounter = () => {
  return {counterStarted: null, running: false}
}

const resetCounter = isRunning => {
  if (isRunning) {
    return {counterStarted: new Date().getTime()}
  }
}

const activeTask = (state = initialState, action) => {
  let delta

  switch(action.type){
    case 'toggleCounter':
      delta = toggleCounter(action.isRunning, action.remaining)
      break
    case 'resetCounter':
      delta = resetCounter(action.isRunning)
      break
    case 'changeActiveTask':
      delta = disableCounter()
      break
    case 'complete':
      delta = disableCounter()
      break
    case 'addTask':
      delta = disableCounter()
      break;
    case 'moveUp':
      if (action.currentIndex === 1) {
        delta = disableCounter()
      }
      break;
    case 'moveDown':
      if (action.currentIndex === 0) {
        delta = disableCounter()
      }
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

export default activeTask
