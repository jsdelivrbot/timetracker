
const initialState = {
  newTask: {description: "", duration: ""},
  taskList: {
    currentFilter: 'none',
    tasks: [
      {description: "uno", duration: 20*60, remaining: 120, completed: false},
      {description: "dos", duration: 31*60, remaining: 120, completed: false},
      {description: "tres", duration: 50*60, remaining: 120, completed: false},
      {description: "cuatro", duration: 70*60, remaining: 120, completed: false},
    ]
  }
}

export default initialState
