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
  return {
    type: 'addTask',
    task: {
      ...newTask,
      remaining: newTask.duration,
      completed: false
    }
  }
}

export const editNewDuration = value => {
  return {
    type: 'editNewDuration',
    value
  }
}

export const editNewTask = value => {
  return {
    type: 'editNewTask',
    value
  }
}
