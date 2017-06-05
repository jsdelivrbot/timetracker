import _ from 'lodash'
import initialState from '../reducers/initialState'

const toggleCounter = (isRunning, remaining) => {
  if (isRunning) {
    return {counterStarted: null, running: false}
  }
  return {counterStarted: new Date().getTime(), running: true}
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
    default:
      break;
  }

  if (!_.isNil(delta)) {
    const newState = _.merge({}, state, delta)
    return newState
  }

  return state
}

export default activeTask
