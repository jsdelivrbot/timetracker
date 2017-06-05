import { connect } from 'react-redux'
import { CurrentTask } from '../components'
import { complete, remove, toggleCounter, resetCounter } from '../actions'

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
    complete: () => dispatch(complete(0)),
    remove: () => dispatch(remove(0)),
  }
}

const ActiveTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTask)

export default ActiveTask
