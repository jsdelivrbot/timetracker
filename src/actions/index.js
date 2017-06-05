import { getFixedDuration } from '../utils'

export const moveUp = currentIndex => {
  return {
    type: 'moveUp',
    currentIndex
  }
}

export const moveDown = currentIndex => {
  return {
    type: 'moveDown',
    currentIndex
  }
}

export const editTask = (currentIndex, value) => {
  return {
    type: 'editTask',
    currentIndex,
    value
  }
}

export const editDuration = (currentIndex, value) => {
  return {
    type: 'editDuration',
    currentIndex,
    value
  }
}

export const remove = currentIndex => {
  return {
    type: 'remove',
    currentIndex
  }
}

export const complete = currentIndex => {
  return {
    type: 'complete',
    currentIndex
  }
}

export const filter = (type, value) => {
  return {
    type: 'filter',
    filter: type,
    value
  }
}

export const addTask = newTask => {
  const duration = getFixedDuration(newTask.predefinedDuration, newTask.duration)

  return {
    type: 'addTask',
    task: {
      description: newTask.description,
      duration,
      remaining: duration,
      completed: false
    }
  }
}

export const editNewDuration = (durationType, value) => {
  return {
    type: 'editNewDuration',
    durationType,
    value
  }
}

export const editNewTask = value => {
  return {
    type: 'editNewTask',
    value
  }
}

export const toggleCounter = (isRunning, remaining) => {
  return {
    type: 'toggleCounter',
    isRunning,
    remaining
  }
}

export const resetCounter = isRunning => {
  return {
    type: 'resetCounter',
    isRunning
  }
}
