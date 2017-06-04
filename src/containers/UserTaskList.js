import { connect } from 'react-redux'
import { TaskList } from '../components'
import { moveUp, moveDown, editTask, editTime, remove, complete, filter } from '../actions'

const mapStateToProps = ({taskList}) => {
  return {
    filteredTasks: () => {
      return taskList.tasks.filter(task => {
        switch(taskList.currentFilter){
          case 'short':
            return task.duration <= 30 * 60
          case 'medium':
            return task.duration > 30 * 60 && task.duration <= 60 * 60
          case 'long':
            return task.duration > 60 * 60
          default:
            return true
        }
      })
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveUp: idx => dispatch(moveUp(idx)),
    moveDown: idx => dispatch(moveDown(idx)),
    editTask: (idx, value) => dispatch(editTask(idx, value)),
    editTime: (idx, value) => dispatch(editTime(idx, value)),
    remove: idx => dispatch(remove(idx)),
    complete: idx => dispatch(complete(idx)),
    filter: duration => dispatch(filter(duration)),
  }
}

const UserTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default UserTaskList
