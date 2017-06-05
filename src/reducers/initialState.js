
const initialState = {
  activeTask: {counterStarted: null, running: false},
  newTask: {description: "", duration: "", predefinedDuration: 'short'},
  taskList: {
    filters: {duration: 'none', status: 'none'},
    tasks: [
      {description: "uno", duration: 20*60, remaining: 60, completed: false},
      {description: "dos", duration: 31*60, remaining: 31*60+15, completed: false},
      {description: "tres", duration: 50*60, remaining: 50*60, completed: false},
      {description: "cuatro", duration: 70*60, remaining: 70*60, completed: true},
    ]
  }
}

export default initialState
