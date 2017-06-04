import { connect } from 'react-redux'
import { CurrentTask } from '../components'
import { toggleCounter, resetCounter } from '../actions'

const mapStateToProps = ({activeTask, taskList}) => {
  return {
    counterStarted: activeTask.counterStarted,
    isRunning: activeTask.running,
    activeTask: taskList.tasks[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCounter: (isRunning, remaining) => dispatch(toggleCounter(isRunning, remaining)),
    reset: isRunning => dispatch(resetCounter(isRunning)),
    complete: () => { console.log("[*] complete") },
    remove: () => { console.log("[*] remove") },
  }
}

const ActiveTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTask)

export default ActiveTask
