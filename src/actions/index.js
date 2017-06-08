import { convertToSeconds, getFixedDuration } from '../utils'

export const disableCounter = currentIndex => {
  return {
    type: 'disableCounter'
  }
}

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
  const seconds = convertToSeconds(duration)

  return {
    type: 'addTask',
    task: {
      description: newTask.description,
      duration: seconds,
      remaining: seconds,
      completed: false,
      createdAt: new Date().getTime(),
      completedAt: null,
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

export const fetchTasks = tasks => {
  return {
    type: 'fetchTasks',
    tasks
  }
}

export const changeActiveTask = () => {
  return {
    type: 'changeActiveTask',
  }
}

