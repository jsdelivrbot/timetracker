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

export const editTime = (currentIndex, value) => {
  return {
    type: 'editTime',
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

export const filter = duration => {
  return {
    type: 'filter',
    duration
  }
}

export const addTask = newTask => {
  return {
    type: 'addTask',
    ...newTask
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
